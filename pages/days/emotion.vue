<template>
<q-page style="padding-top: 46px">
  <q-tab-panels v-model="tab" animated>
    
    <q-tab-panel class="bg-grey-1" name="high10">
      <div class="col-12 col-md"  v-if="emotion.emotion">
        <div class="text-h6 q-pa-sm" id="涨停">涨停: {{emotion.emotion.up}}；跌停: {{emotion.emotion.down}} </div>
        
        <div class="text-body1 q-pa-sm">
          新高：{{emotion.emotion.today}}；前高：{{emotion.emotion.yestoday}}；<br />
          连板：{{emotion.emotion.continue}}；一进二：{{emotion.emotion.onetwo}}；封板：{{emotion.limitup.rate}}%；<br />
          平均涨幅：{{emotion.emotion.mean}}%<br />
        </div>

        <q-separator inset spaced />

        <div class="text-h6 q-pa-sm" id="高标">高标：{{emotion.highbar.two}}, 涨幅：{{emotion.highbar.mean}}% </div>
        <div class="text-body1 q-pa-sm">
          机会：{{emotion.highbar.chance.count}}；<br />
          板块：{{emotion.highbar.chance.block}}<br />
          个股：{{emotion.highbar.chance.stock}}<br />
          风险：{{emotion.highbar.risk.count}}；个股：{{emotion.highbar.risk.stock}}<br />
        </div>

        <q-separator inset spaced />

        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsHigh"
            :columns="columnsHigh"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>

        <q-separator inset spaced />

        <div class="text-h6 q-pa-sm" id="注册制新股">注册制新股(20日）</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsNew"
            :columns="columnsNew"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel class="bg-grey-1" name="top10">
      <div class="text-h6 q-pa-sm">今日涨停: {{emotion.new.chance}}</div>
      <div class="q-pa-sm">
        机会：{{emotion.new.block}}
      </div>
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rows10"
          :columns="columns10"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
      </div>
    </q-tab-panel>

    <q-tab-panel class="bg-grey-1" name="low10">
      <div class="text-h6 q-pa-sm">沪深</div>
      
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsDown"
          :columns="columnsDown"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
      </div>

      <q-separator inset spaced />
      <div class="text-h6 q-pa-sm">北京</div>
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsDownBJ"
          :columns="columnsDown"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
      </div>
    </q-tab-panel>
  </q-tab-panels>
  <q-page-sticky expand position="top" class="top-title">
    <q-toolbar class="bg-red-3 text-white ">
      <q-tabs
          v-model="tab"
          dense
          class="text-white"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          
          <q-tab name="high10" label="高标和新股" />
          <q-tab name="top10" label="今日涨停" />
          <q-tab name="low10" label="今日跌停" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>
  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'



export default defineComponent({
  name: 'EmotionView',
  
  mounted: function () {
    this.getServerMarketData()

    const result = document.getElementsByClassName('text-h6');
    const store = useAlinksStore()
    const alinks = new Array()
    
    for (let i = 0; i <  result.length; i++) {
            alinks.push(result[i].id)
        }
    store.setAlinks(alinks) 
  },
  methods: {
    getServerMarketData: async function () {
      const res = await http.get('https://stock.1dian.site/h5/data/emotion.json', {})

      this.emotion = res.data.data.emotion;
      this.rows10 = res.data.data.limitup.series;
      this.rowsHigh = res.data.data.highbar.series;
      this.rowsDown = res.data.data.limitdown.series;
      this.rowsDownBJ = res.data.data.limitdownBJ.series;
      this.rowsNew = res.data.data.New.series;

      }
    },

  setup () {
    
    const emotion = ref({});
    const rows10 = ref({});
    const rowsHigh = ref({});
    const rowsNew = ref({});
    const rowsDown = ref({});
    const rowsDownBJ = ref({});
    
    const columns10 = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '连', align: 'center', label: '连', field: 'hcount', sortable: true},
      { name: '时间', align: 'center', label: '时间', field: 'time', sortable: true },
      { name: '基因', align: 'center', label: '基因', field: 'RGene', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate', sortable: true},
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true },
      { name: '备注', align: 'center', label: '备注', field: 'memo', sortable: true },
      { name: '封单', align: 'center', label: '封单', field: 'amount', sortable: true },
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      { name: '概念', align: 'center', label: '概念', field: 'blockname', sortable: true },
    ]);
    const columnsHigh = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '连', align: 'center', label: '连', field: 'hcount', sortable: true},
      { name: '涨幅', align: 'center', label: '涨幅', field: 'rate', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true },
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      { name: '概念', align: 'center', label: '概念', field: 'blockname', sortable: true },
      ]);
    const columnsDown = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '连', align: 'center', label: '连', field: 'hcount', sortable: true},
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate', sortable: true},
      { name: '最低', align: 'center', label: '最低', field: 'minrate', sortable: true},
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true},
      { name: '封单', align: 'center', label: '封单', field: 'amount', sortable: true},
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      ]);
    const columnsNew = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate', sortable: true },
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true },
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      { name: '上市时间', align: 'center', label: '上市时间', field: 'ipodays', sortable: true },
      ]);

    return { emotion, rows10, rowsHigh, rowsNew, rowsDown, rowsDownBJ, columns10, columnsHigh, columnsDown, columnsNew, tab: ref('high10')};

  }
});
</script>


<style lang="sass">
.my-sticky-column-table
  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:first-child
    background-color: #f5f5dc

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1

.top-title
  z-index: 100

.chart
  height: 520px

</style>









