<template>
  <div  >
    <div class="text-h6 q-pa-sm" id="龙虎榜提示">龙虎榜提示</div>
    <div class="col-12 col-md" v-if="loading">
      <div class="text-body2 q-pa-sm">
        <b>关注：</b> {{ warn.duo}}<br />
        <b>量化打板:</b> {{ warn.lianghuadbd}}<br />
        
        <q-separator spaced/>
        <b>风险：</b><br />
        - <b>东方财富:</b> {{ warn.east}}<br />
        - <b>开源证券:</b> {{ warn.kaiyuan}}<br />
        - <b>量化基金:</b> {{ warn.lianghuajj}}<br />
        - <b>量化打板:</b> {{ warn.lianghuadb}}<br />
        - <b>独占:</b> {{ warn.duzhan}}<br />
        <q-separator spaced/>
        <b>游资：</b><br />
        - <span class="text-green">桑田路</span>: {{ warn.sangtianlu}}<br />
        - <span class="text-green">朱雀大街</span>: {{ warn.zhuquedajie}}<br />
        - <span class="text-green">上塘路</span>: {{ warn.shangtanglu}}<br />
        - <span class="text-red">中关村大街</span>: {{ warn.zhongguancundajie}}<br />
        - <span class="text-red">天童南路</span>: {{ warn.tiantongnanlu}}<br />
        - <span class="text-red">太平南路(新一)</span>: {{ warn.taipingnanlu}}<br />
        - <span class="text-red">中山东路</span>: {{ warn.zhongshandonglu}}<br />
        - <span class="text-red">和源路</span>: {{ warn.heyuanlu}}<br />
        - <span class="text-red">中泰湖北</span>: {{ warn.zhongtaihubei}}<br />
        - <span class="text-red">章盟主</span>: {{ warn.zhangmengzhu}}<br />
        - <span class="text-red">陈小群</span>: {{ warn.chenxiaoqun}}<br />
        - <span class="text-red">光复路</span>: {{ warn.guangfulu}}<br />
        <q-separator spaced/>
        <b>负反馈：</b><br />
        {{ warn.fufankui }}<br />
      </div>
    </div>

  </div>
  <q-separator inset spaced />

  <div>
    <div class="text-h6 q-pa-sm" id="接力可能列表">接力可能列表</div>
    <div class="col-12" v-if="this.loading">
      <div class="q-pa-sm">
        <div v-if="rowzhengfankuiz.length > 18">
          <q-table
            class="my-sticky-header-column-table my-sticky-header-height-table"
            dense flat bordered
            :rows="rowzhengfankuiz"
            :columns="columnzhengfankuiz"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.RATE >0 & props.row.RATE < 5)?'bg-red-1':(props.row.RATE >=5 & props.row.RATE < 9)?'bg-red-2':(props.row.RATE >=9)?'bg-red-3':(props.row.RATE < 0 & props.row.RATE > -7 )?'bg-green-1':(props.row.RATE <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
        <div v-else>
          <q-table
            class="my-sticky-header-column-table"
            dense flat bordered
            :rows="rowzhengfankuiz"
            :columns="columnzhengfankuiz"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.RATE >0 & props.row.RATE < 5)?'bg-red-1':(props.row.RATE >=5 & props.row.RATE < 9)?'bg-red-2':(props.row.RATE >=9)?'bg-red-3':(props.row.RATE < 0 & props.row.RATE > -7 )?'bg-green-1':(props.row.RATE <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </div>
  <div class="text-h6 q-pa-sm" id="接力可能分时">接力可能分时</div>
  <div class="row bg-grey-1 q-pa-sm wrap" >
    <template v-for="zcode in this.zcode">
      <div class="col-2 col-md-2">
        <q-img :src="zcode" /> 
      </div>
    </template>
  </div>
    
  <q-separator inset spaced/>

  <div>
    <div class="text-h6 q-pa-sm" id="涨停未上榜列表">涨停未上榜列表</div>
    <div class="col-12" v-if="this.loading">
      <div class="q-pa-sm">
        <div v-if="rowzhengfankuiw.length > 18">
          <q-table
            class="my-sticky-header-column-table my-sticky-header-height-table"
            dense flat bordered
            :rows="rowzhengfankuiw"
            :columns="columnzhengfankuiw"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.RATE >0 & props.row.RATE < 5)?'bg-red-1':(props.row.RATE >=5 & props.row.RATE < 9)?'bg-red-2':(props.row.RATE >=9)?'bg-red-3':(props.row.RATE < 0 & props.row.RATE > -7 )?'bg-green-1':(props.row.RATE <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
        <div v-else>
          <q-table
            class="my-sticky-header-column-table"
            dense flat bordered
            :rows="rowzhengfankuiw"
            :columns="columnzhengfankuiw"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.RATE >0 & props.row.RATE < 5)?'bg-red-1':(props.row.RATE >=5 & props.row.RATE < 9)?'bg-red-2':(props.row.RATE >=9)?'bg-red-3':(props.row.RATE < 0 & props.row.RATE > -7 )?'bg-green-1':(props.row.RATE <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>

    <div class="text-h6 q-pa-sm" id="涨停未上榜分时">涨停未上榜分时</div>
    <div class="row bg-grey-1 q-pa-sm wrap" >
      <template v-for="wcode in this.wcode">
        <div class="col-2 col-md-2">
          <q-img :src="wcode" /> 
        </div>
      </template>
    </div>
  </div>
  <q-separator inset spaced/>


  <div>
    <div class="text-h6 q-pa-sm" id="负反馈风险列表">负反馈风险列表</div>
    <div class="col-12" v-if="this.loading">
      <div class="q-pa-sm">
        <div v-if="rowzhengfankuif.length > 18">
          <q-table
            class="my-sticky-header-column-table my-sticky-header-height-table"
            dense flat bordered
            :rows="rowzhengfankuif"
            :columns="columnzhengfankuif"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
          </q-table>
        </div>
        <div v-else>
          <q-table
            class="my-sticky-header-column-table"
            dense flat bordered
            :rows="rowzhengfankuif"
            :columns="columnzhengfankuif"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.RATE >0 & props.row.RATE < 5)?'bg-red-1':(props.row.RATE >=5 & props.row.RATE < 9)?'bg-red-2':(props.row.RATE >=9)?'bg-red-3':(props.row.RATE < 0 & props.row.RATE > -7 )?'bg-green-1':(props.row.RATE <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
    <div class="text-h6 q-pa-sm" id="负反馈风险分时">负反馈风险分时</div>
    <div class="row bg-grey-1 q-pa-sm wrap" >
      <template v-for="fcode in this.fcode">
        <div class="col-2 col-md-2">
          <q-img :src="fcode" /> 
        </div>
      </template>
    </div>
  </div>
  <q-separator inset spaced/>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'LhbView',
  created() {
    
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
      
      const res1 = await http.get('https://stock.1dian.site/h5/data/lhb.json', {})
      
      this.warn = res1.data.data.lhb.warn

      this.rowzhengfankuiz = res1.data.data.lhb.table.z.zhengfankui
      this.zcode = res1.data.data.lhb.table.z.code
      
      let colz = res1.data.data.lhb.table.z.col

      this.columnzhengfankuiz = new Array(colz.length)

      for (let i = 0; i < colz.length; i++) {
        if ( colz[i] == 'name')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '名称', field: colz[i], sortable: false}
        else if ( colz[i] == 'code')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '代码', field: colz[i], sortable: false}
        else if ( colz[i] == 'z1')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '正', field: colz[i], sortable: false}
        else if ( colz[i] == 'f1')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '负', field: colz[i], sortable: false}
        else if ( colz[i] == 'RATE')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '涨幅', field: colz[i], sortable: false}
        else if ( colz[i] == 'HSZ')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '换手率', field: colz[i], sortable: false}
        else if ( colz[i] == 'N3')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '连板', field: colz[i], sortable: false}
        else if ( colz[i] == 'step')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '昨日涨停', field: colz[i], sortable: false}
        else
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: colz[i], field: colz[i], sortable: false}
      }

      for (let i = 0; i <  this.zcode.length; i++) {
            if (this.zcode[i][0] == 6)
              this.zcode[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1."+this.zcode[i]
            else
              this.zcode[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0."+this.zcode[i]
        }

      this.rowzhengfankuif = res1.data.data.lhb.table.f.zhengfankui
      this.fcode = res1.data.data.lhb.table.f.code

      let colf = res1.data.data.lhb.table.f.col

      this.columnzhengfankuif = new Array(colf.length)

      for (let i = 0; i < colf.length; i++) {
        if ( colf[i] == 'name')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '名称', field: colf[i], sortable: false}
        else if ( colf[i] == 'code')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '代码', field: colf[i], sortable: false}
        else if ( colf[i] == 'z1')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '正', field: colf[i], sortable: false}
        else if ( colf[i] == 'f1')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '负', field: colf[i], sortable: false}
        else if ( colz[i] == 'RATE')
          this.columnzhengfankuif[i] = { name: colz[i], align: 'left', label: '涨幅', field: colz[i], sortable: false}
        else if ( colz[i] == 'HSZ')
          this.columnzhengfankuif[i] = { name: colz[i], align: 'left', label: '换手率', field: colz[i], sortable: false}
        else if ( colz[i] == 'N3')
          this.columnzhengfankuif[i] = { name: colz[i], align: 'left', label: '连板', field: colz[i], sortable: false}
        else if ( colz[i] == 'step')
          this.columnzhengfankuif[i] = { name: colz[i], align: 'left', label: '昨日涨停', field: colz[i], sortable: false}
        else
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: colf[i], field: colf[i], sortable: false}
      }

      for (let i = 0; i <  this.fcode.length; i++) {
            if (this.fcode[i][0] == 6)
              this.fcode[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1."+this.fcode[i]
            else
              this.fcode[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0."+this.fcode[i]
        }


      this.rowzhengfankuiw = res1.data.data.lhb.table.w.zhengfankui
      this.wcode = res1.data.data.lhb.table.w.code

      for (let i = 0; i <  this.wcode.length; i++) {
            if (this.wcode[i][0] == 6)
              this.wcode[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1."+this.wcode[i]
            else
              this.wcode[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0."+this.wcode[i]
        }

      
      this.columnzhengfankuiw = [
          { name: 'code', align: 'left', label: '代码', field: 'code', sortable: false},
          { name: 'name', align: 'left', label: '名称', field: 'name', sortable: false},
          { name: 'RATE', align: 'left', label: '涨幅', field: 'RATE', sortable: false},
          { name: 'HSZ', align: 'left', label: '换手', field: 'HSZ', sortable: false},
          { name: 'step', align: 'left', label: '昨日涨停', field: 'step', sortable: false}
        ]

      this.loading = true

    }
  },

  setup () {
    return { rowzhengfankuiz:ref({}), columnzhengfankuiz:ref({}), rowzhengfankuif:ref({}), columnzhengfankuif:ref({}), rowzhengfankuiw:ref({}), columnzhengfankuiw:ref({}), loading:ref(false), warn:ref(), zcode:ref(), fcode:ref(), wcode:ref()};
  }
});

</script>

<style lang="sass">
.my-sticky-header-height-table
  height: 580px

.my-sticky-header-column-table
  /* height or max-height is important */
  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #f5f5dc

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #f5f5dc

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
