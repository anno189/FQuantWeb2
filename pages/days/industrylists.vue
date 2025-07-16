<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="limit">
      <div class="col-12" v-if="rowsLimit">
        <!-- <div class="text-h6 q-pa-sm">情绪</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsLimit"
            :columns="columnsLimit"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.scount >= 5)?'bg-green-1':(props.row.bsum > 1000)?'bg-red-4':((props.row.bsum > 500) & (props.row.bcount > 3))?'bg-red-3':(props.row.asum >1500)?'bg-red-2':(props.row.scount <=2)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
        </div>
      </div>
      <q-separator inset spaced />
      <div class="col-12" v-if="rowsLimit">
        <div class="q-pa-sm">
          <v-chart class="chart" :option="stocklimiyblockOption" autoresize ref="stocklimiyblockChart"/>
        </div>
      </div>
      
    </q-tab-panel>
    <q-tab-panel name="index">
      <div class="col-12" v-if="rowsM">
        <!-- <div class="text-h6 q-pa-sm">宽指</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsM"
            :columns="columnsM"
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

    <q-tab-panel name="industry">
      <div class="col-12" v-if="rowsI1">
        <!-- <div class="text-h6 q-pa-sm">行业</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsI1"
            :columns="columnsI1"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.count05 > 10)?'bg-red-3':(props.row.count05 > 6)?'bg-red-2':(props.row.count05 > 3)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel name="concept">
      <div class="col-12" v-if="rowsI1">
        <!-- <div class="text-h6 q-pa-sm">概念</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsCon"
            :columns="columnsCon"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.count05 > 10)?'bg-red-3':(props.row.count05 > 6)?'bg-red-2':(props.row.count05 > 3)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
        </div>
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
          <q-tab name="limit" label="涨停" />
          <q-tab name="index" label="宽指" />
          <q-tab name="industry" label="行业" />
          <q-tab name="concept" label="概念" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>

  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  MarkAreaComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  LineChart,
  MarkAreaComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])


export default({
  name: 'IndustryListView',
  components: {
    VChart
  },
  
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
      let params = {}
      const response0 = await http.get('https://stock.1dian.site/h5/data/index.json', params)
      this.rowsI1 = response0.data.data.I3.series
      this.rowsM = response0.data.data.M.series;
      this.rowsCon = response0.data.data.con.series;

      const response1 = await http.get('https://stock.1dian.site/h5/data/limit_block.json', params)
      this.rowsLimit = response1.data.data.limit_block

      const response2 = await http.get('https://stock.1dian.site/h5/data/limit_block_line.json', params)
      this.stocklimiyblockOption = response2.data

      
    }
  },

  setup () {
    const rowsI1 = ref(null);
    const rowsM = ref(null);
    const rowsCon = ref(null);
    const rowsLimit = ref(null);
    const stocklimiyblockOption = ref({});
    

    const columnsLimit = ref([
      { name: '分类', align: 'left', label: '分类', field: 'n1name', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'blockname', sortable: true},
      { name: '涨停数', align: 'right', label: '涨停数', field: 'acount', sortable: true},
      { name: '强度', align: 'right', label: '强度', field: 'asum', sortable: true},
      { name: '平均强度', align: 'right', label: '平均强度', field: 'amean', sortable: true },
      { name: '连板数', align: 'right', label: '连板数', field: 'bcount', sortable: true },
      { name: '连强度', align: 'right', label: '强度', field: 'bsum', sortable: true},
      { name: '连平均强度', align: 'right', label: '平均强度', field: 'bmean', sortable: true },
      { name: '首板数', align: 'right', label: '首板数', field: 'ccount', sortable: true },
      { name: '首强度', align: 'right', label: '强度', field: 'csum', sortable: true},
      { name: '首平均强度', align: 'right', label: '平均强度', field: 'cmean', sortable: true },
      { name: '炸板数', align: 'right', label: '炸板数', field: 'scount', sortable: true },
      { name: '涨幅', align: 'right', label: '涨幅', field: 'srate', sortable: true },
    ]);

    const columnsM = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '涨跌', align: 'right', label: '涨跌', field: 'rate', sortable: true},
      { name: '量', align: 'right', label: '量', field: 'vol', sortable: true },
      { name: '量比', align: 'right', label: '量比', field: 'vrate', sortable: true },
      { name: '金', align: 'right', label: '金', field: 'amount', sortable: true },
      { name: '金比', align: 'right', label: '金比', field: 'arate', sortable: true },
      { name: '上涨', align: 'right', label: '上涨', field: 'up_count', sortable: true },
      { name: '下跌', align: 'right', label: '下跌', field: 'down_count', sortable: true },
      { name: '涨跌比', align: 'right', label: '涨跌比', field: 'zdrate', sortable: true },
    ]);

    const columnsI1 = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '涨跌', align: 'left', label: '涨跌', field: 'rate', sortable: true},
      { name: '最大涨幅', align: 'right', label: '最大涨幅', field: 'maxrate', sortable: true },
      { name: '涨停数', align: 'right', label: '涨停数', field: 'count10', sortable: true },
      { name: '7%平均涨幅', align: 'right', label: '7%平均涨幅', field: 'mean07', sortable: true },
      { name: '7%数量', align: 'right', label: '7%数量', field: 'count07', sortable: true },
      { name: '5%平均涨幅', align: 'right', label: '5%平均涨幅', field: 'mean05', sortable: true },
      { name: '5%数量', align: 'right', label: '5%数量', field: 'count05', sortable: true },
      { name: '量比', align: 'right', label: '量比', field: 'vrate', sortable: true },
      { name: '金', align: 'right', label: '金', field: 'amount', sortable: true },
      { name: '金比', align: 'right', label: '金比', field: 'arate', sortable: true },
      { name: '上涨', align: 'right', label: '上涨', field: 'up_count', sortable: true },
      { name: '下跌', align: 'right', label: '下跌', field: 'down_count', sortable: true },
      { name: '涨跌比', align: 'right', label: '涨跌比', field: 'zdrate', sortable: true },
    ]);
    //{ name: '量', align: 'right', label: '量', field: 'vol', sortable: true },

    const columnsCon = ref([
      { name: '分类', align: 'left', label: '分类', field: 'n1name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '涨跌', align: 'left', label: '涨跌', field: 'rate', sortable: true},
      { name: '最大涨幅', align: 'right', label: '最大涨幅', field: 'maxrate', sortable: true },
      { name: '涨停数', align: 'right', label: '涨停数', field: 'count10', sortable: true },
      { name: '7%平均涨幅', align: 'right', label: '7%平均涨幅', field: 'mean07', sortable: true },
      { name: '7%数量', align: 'right', label: '7%数量', field: 'count07', sortable: true },
      { name: '5%平均涨幅', align: 'right', label: '5%平均涨幅', field: 'mean05', sortable: true },
      { name: '5%数量', align: 'right', label: '5%数量', field: 'count05', sortable: true },
      { name: '上涨', align: 'right', label: '上涨', field: 'up_count', sortable: true },
      { name: '下跌', align: 'right', label: '下跌', field: 'down_count', sortable: true },
    ]);
    return { columnsI1, rowsI1, rowsM, columnsM, rowsCon, columnsCon,  rowsLimit, columnsLimit, stocklimiyblockOption, tab: ref('limit') };
      
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

</style>

<style scoped>
.chart {
  height: 520px;
}
</style>




