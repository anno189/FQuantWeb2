<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="start" class="bg-grey-1">
      <div class="text-h6 q-pa-sm" id="竞价成交">竞价成交 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="row" v-if="loading">

        <div class="col-12 col-md">
          <div class="text-body2 q-pa-sm">
            <b>9:25 竞价结束：</b><br />
            - 撮合成交：{{three.allamount}}亿<br />
            
            <q-separator spaced/>

            <b>9:25 竞价一字：</b><br />
            - 一字涨停：{{three.amount}}亿<br />
            - 涨停封单：{{three.fd}}亿<br />
            - 涨停列表：{{three.lists0}}<br />
            - ST：{{three.lists1}}<br />

            <q-separator spaced/>
            - 一字跌停：{{three.lists2}}<br />
          </div>
        </div>


        <!-- 市场资金 -->
        <div class="col-12 col-md">
            <v-chart class="chart" :option="lPreStockDataOption" autoresize/>
        </div>
        
      </div>

      <q-separator inset spaced/>

      <div class="flex-break"></div>
      <div class="text-h6 q-pa-sm" id="情绪反馈">情绪反馈 <q-badge outline color="primary" align="top" > {{this.date}} 09:28 更新</q-badge></div>
        
      <div class="row bg-grey-1" v-if="loading">
        <!-- 市场资金 -->
        <div class="col-12 col-md">
         <div class="divide-y divide-dashed w-full">
            <v-chart class="chart" :option="M3Option" autoresize/>
          </div>

          <div class="text-body2 q-pa-sm">
            <div v-if="this.M0Option.M3.up.length > 0">
              一字涨停：<br />
              <ul>
                <li v-for="item in this.M0Option.M3.up" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="this.M0Option.M3.do.length > 0">
              一字跌停：<br />
              <ul>
                <li v-for="item in this.M0Option.M3.do" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div> 
        <div class="col-12 col-md">
          <div class="divide-y divide-dashed w-full">
            <v-chart class="chart" :option="M2Option" autoresize/>
          </div>
          <div class="text-body2 q-pa-sm">
            <div v-if="this.M0Option.M2.up.length > 0">
              一字涨停：<br />
              <ul>
                <li v-for="item in this.M0Option.M2.up" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="this.M0Option.M2.do.length > 0">
              一字跌停：<br />
              <ul>
                <li v-for="item in this.M0Option.M2.do" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="divide-y divide-dashed w-full">
            <v-chart class="chart" :option="M1Option" autoresize/>
          </div>
          <div class="text-body2 q-pa-sm">
            <div v-if="this.M0Option.M1.up.length > 0">
              一字涨停：<br />
              <ul>
                <li v-for="item in this.M0Option.M1.up" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="this.M0Option.M1.do.length > 0">
              一字跌停：<br />
              <ul>
                <li v-for="item in this.M0Option.M1.do" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <q-separator inset spaced />
      <div class="flex-break"></div>

       <div class="row bg-grey-1" v-if="loading">
        <!-- 市场资金 -->
        <div class="col-12 col-md">
          <div class="divide-y divide-dashed w-full">
            <v-chart class="chart" :option="M4Option" autoresize/>
          </div>

          <div class="text-body2 q-pa-sm">
            <div v-if="this.M0Option.M4.up.length > 0">
              一字涨停：<br />
              <ul>
                <li v-for="item in this.M0Option.M4.up" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="this.M0Option.M4.do.length > 0">
              一字跌停：<br />
              <ul>
                <li v-for="item in this.M0Option.M4.do" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="text-h6 q-pa-sm"> 非情绪涨跌停</div>
          <div class="text-body2 q-pa-sm">
            <div v-if="this.M0Option.M0.up.length > 0">
              一字涨停：<br />
              <ul>
                <li v-for="item in this.M0Option.M0.up" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
            <div v-if="this.M0Option.M0.do.length > 0">
              一字跌停：<br />
              <ul>
                <li v-for="item in this.M0Option.M0.do" :key="item.id">
                {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md">
        </div>
      </div>


      <div class="text-h6 q-pa-sm" id="竞价情况">竞价情况 <q-badge outline color="primary" align="top" > {{this.date}} 09:28 更新</q-badge></div>
         
      <div>
        <div class="col-12" v-if="this.rowstart">
          <div class="q-pa-sm">
            <q-table
              class="my-sticky-column-table"
              dense
              bordered
              :rows="rowstart"
              :columns="columnstart"
              :rows-per-page-options="[10000]"
              row-key="name"
            >
            </q-table>
          </div>
        </div>

        
      </div>

      <q-separator inset spaced/>

      <div>

        <div class="text-h6 q-pa-sm" id="前200板块统计">前200板块统计 <q-badge outline color="primary" align="top" > {{this.date}} 09:28 更新</q-badge></div>
            
        <div class="col-12" v-if="this.rowsins">
          <div class="q-pa-sm">
            <q-table
              class="my-sticky-column-table"
              dense
              bordered
              :rows="rowsins"
              :columns="columnsins"
              :rows-per-page-options="[10000]"
              row-key="name"
            >
              <template v-slot:body-cell="props" >
                <q-td
                  :props="props"
                  :class="(props.row.orate_200 >0 & props.row.orate_200 < 1)?'bg-red-1':(props.row.orate_200 >=1 & props.row.orate_200 < 2)?'bg-red-2':(props.row.orate_200 >=2)?'bg-red-3':(props.row.orate_200 < 0 & props.row.orate > -1 )?'bg-green-1':(props.row.orate_200 <= -1)?'bg-green-3':''"
                >
                  {{props.value}}
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>

      <q-separator inset spaced/>

      <div>
        <div class="text-h6 q-pa-sm" id="前200叠加">前200叠加 <q-badge outline color="primary" align="top" > {{this.date}} 09:28 更新</q-badge></div>
            
        <div class="col-12" v-if="this.rowstock">
          <div class="q-pa-sm">
            <q-table
              class="my-sticky-column-table"
              dense
              bordered
              :rows="rowstock"
              :columns="columnstock"
              :rows-per-page-options="[10000]"
              row-key="name"
            >
              <template v-slot:body-cell="props" >
                <q-td
                  :props="props"
                  :class="(props.row.orate >0 & props.row.orate < 1)?'bg-red-1':(props.row.orate >=1 & props.row.orate < 3)?'bg-red-2':(props.row.orate >=5)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -3 )?'bg-green-1':(props.row.orate <= -5)?'bg-green-3':''"
                >
                  {{props.value}}
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>

    </q-tab-panel>

    <q-tab-panel name="detail" class="bg-grey-1">
      
      <div class="col-12 col-md"  v-if="loading">
        <div class="bordered q-pa-md col col-md-9 "  v-html="emote.message"></div>
      </div>
      <q-separator inset spaced  v-if="loading" />

      <div class="text-h6 q-pa-sm"  id="中位行业优势" >中位行业优势 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowslimitup">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsrecommend"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props" >
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <q-separator inset spaced/>

      <div class="text-h6 q-pa-sm" v-if="loading">竞价 7% <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowslimitup">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowslimitup"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props" >
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <q-separator inset spaced/>

      <div class="text-h6 q-pa-sm" v-if="loading">竞价 -7% <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowslimitdown">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowslimitdown"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <q-separator inset spaced/>

      <div class="text-h6 q-pa-sm" v-if="loading">高标 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowshigh">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowshigh"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <q-separator inset spaced/>

      <div class="text-h6 q-pa-sm" v-if="loading">负反馈 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowsnegative">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsnegative"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>


      <q-separator inset spaced/>
      <div class="text-h6 q-pa-sm" v-if="loading">成交金额 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowstop20">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowstop20"
            :columns="columnstop20"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>


      <q-separator inset spaced/>
      <div class="text-h6 q-pa-sm" v-if="loading">中位 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowsmiddle">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsmiddle"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <q-separator inset spaced/>
      <div class="text-h6 q-pa-sm" v-if="loading">启动 <q-badge outline color="primary" align="top" > {{this.date}} 09:26 更新</q-badge></div>
      <div class="col-12" v-if="rowslow">
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowslow"
            :columns="columnslimitup"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
             <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.orate >0 & props.row.orate < 5)?'bg-red-1':(props.row.orate >=5 & props.row.orate < 9)?'bg-red-2':(props.row.orate >=9)?'bg-red-3':(props.row.orate < 0 & props.row.orate > -7 )?'bg-green-1':(props.row.orate <= -7)?'bg-green-3':''"
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
          <q-tab name="start" label="竞价结果" />
          <q-tab name="detail" label="列表" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>


</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, GaugeChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  LineChart,
  GaugeChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
])


export default({
  name: 'PreStockDataView',
  components: { VChart },

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
      const res1 = await http.get('https://stock.1dian.site/h5/data/stock_open_m3.json', {})
      this.M3Option = JSON.parse(JSON.stringify(res1.data), function (key, v) {
             if (key === "formatter" && v.indexOf("function")  > -1) {
                 return eval("(" + v + ")");
             } else {
                 return v;
             }
          
        })

      const res2 = await http.get('https://stock.1dian.site/h5/data/stock_open_m2.json', {})
      this.M2Option = JSON.parse(JSON.stringify(res2.data), function (key, v) {
             if (key === "formatter" && v.indexOf("function")  > -1) {
                 return eval("(" + v + ")");
             } else {
                 return v;
             }
          
        })

      const res3 = await http.get('https://stock.1dian.site/h5/data/stock_open_m1.json', {})
      this.M1Option = JSON.parse(JSON.stringify(res3.data), function (key, v) {
             if (key === "formatter" && v.indexOf("function")  > -1) {
                 return eval("(" + v + ")");
             } else {
                 return v;
             }
          
        })

      const res4 = await http.get('https://stock.1dian.site/h5/data/stock_open_m4.json', {})
      this.M4Option = JSON.parse(JSON.stringify(res4.data), function (key, v) {
             if (key === "formatter" && v.indexOf("function")  > -1) {
                 return eval("(" + v + ")");
             } else {
                 return v;
             }
          
        })

      const res5 = await http.get('https://stock.1dian.site/h5/data/stock_open_M_list.json', {})
      this.M0Option = res5.data.data

      console.log(this.M0Option)

      const response = await http.get('https://stock.1dian.site//h5/data/mbprestockdata.json', {})
      this.three = response.data.three

      this.rowslimitup = response.data.lists.limitup
      this.rowslimitdown = response.data.lists.limitdown
      this.rowsnegative = response.data.lists.negative
      this.rowshigh = response.data.lists.high
      this.rowstop20 = response.data.lists.top20
      this.rowsmiddle = response.data.lists.middle
      this.rowslow = response.data.lists.low
      this.rowsrecommend = response.data.lists.recommend
      this.emote = response.data.emote
      
      this.lPreStockDataOption.series[0].data = response.data.line0.top10list
      this.lPreStockDataOption.series[1].data = response.data.line0.top50list
      this.lPreStockDataOption.series[2].data = response.data.line0.allamountlist
      this.lPreStockDataOption.series[3].data = response.data.line0.one0
      this.lPreStockDataOption.series[4].data = response.data.line0.one1

      this.lPreStockDataOption.xAxis.data = response.data.line0.datelist

      this.date = response.data.date

      this.loading = true  

      const responsestart = await http.get('https://stock.1dian.site//h5/data/openstatus.json', {})
      
      this.rowstart = responsestart.data.data
      this.rowsins = responsestart.data.ins
      this.rowstock = responsestart.data.stocks
      
    }
  },

  setup () {
    const lPreStockDataOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['前10成交','前50成交', '全部成交', '一字封单', '一字撮合'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: [],
            axisLine:{onZero:false},
            boundaryGap:false,
          },
          yAxis: [{
              type: 'value',
            },
            {
              type: 'value',
              show: false,
            },
            {
              type: 'value',
              show: false,
            },
          ],
          series: [
            { name:'前10成交', type:'line', ymbol:'none', data:[], },
            { name:'前50成交', type:'line', ymbol:'none', data:[], },
            { name:'全部成交', type:'line', ymbol:'none', data:[], },
            { name:'一字封单', type:'line', ymbol:'none', data:[], },
            { name:'一字撮合', type:'line', ymbol:'none', data:[], },
          ]
    });

    const columnstart = ref([
      { name: '分类', align: 'left', label: '分类', field: 'type_', sortable: false},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: false},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: false},
      { name: '昨日', align: 'right', label: '昨日', field: 'pre_rate', sortable: false },
      { name: '今日', align: 'right', label: '今日', field: 'orate', sortable: false },
      { name: '标签', align: 'left', label: '标签', field: 'tag', sortable: false },
      { name: '备注', align: 'left', label: '备注', field: 'memo', sortable: false },
    ]);

    const columnsins = ref([
      { name: '板块', align: 'left', label: '板块', field: 'blockname', sortable: false},
      { name: '涨跌', align: 'right', label: '涨跌', field: 'orate_all', sortable: true},
      { name: '涨停', align: 'right', label: '涨停', field: 'upcount', sortable: true},
      { name: '涨3%', align: 'right', label: '涨3%', field: 'u3count', sortable: true },
      { name: '涨5%', align: 'right', label: '涨5%', field: 'u5count', sortable: true },
      { name: '跌5%', align: 'right', label: '跌5%', field: 'd5count', sortable: true },
      { name: '前200', align: 'right', label: '前200', field: 'count_200', sortable: true },
      { name: '涨幅', align: 'right', label: '涨幅', field: 'orate_200', sortable: true },
      { name: '200多头', align: 'right', label: '200多头', field: 'count_up', sortable: true },
      { name: '涨幅', align: 'right', label: '涨幅', field: 'orate_up', sortable: true },
    ]);

    
    const columnslimitup = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '状态', align: 'center', label: '状态', field: 'oicon', sortable: true},
      { name: '备注', align: 'center', label: '备注', field: 'memos', sortable: true },
      { name: 'Tag', align: 'center', label: 'Tag', field: 'tag', sortable: true },
      { name: '市值', align: 'right', label: '市值', field: 'liutongshizhi', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'orate', sortable: true},
      { name: '总额', align: 'right', label: '总额', field: 'amount', sortable: true },
      { name: '换手率', align: 'right', label: '换手率', field: 'HSL', sortable: true },
      { name: '涨跌', align: 'right', label: '涨跌', field: 'updown', sortable: true },
      { name: '连板', align: 'right', label: '连板', field: 'hcount', sortable: true },
      { name: '历史', align: 'center', label: '历史', field: 'RGene', sortable: true },
      { name: '排序', align: 'center', label: '排序', field: 'asort_', sortable: true }
    ]);

    const columnstop20 = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '状态', align: 'right', label: '状态', field: 'oicon', sortable: true},
      { name: '备注', align: 'center', label: '备注', field: 'memos', sortable: true },
      { name: 'Tag', align: 'center', label: 'Tag', field: 'tag', sortable: true },
      { name: '市值', align: 'right', label: '市值', field: 'liutongshizhi', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'orate', sortable: true},
      { name: '总额', align: 'right', label: '总额', field: 'amount', sortable: true },
      { name: '换手率', align: 'right', label: '换手率', field: 'HSL', sortable: true },
      { name: '涨跌', align: 'right', label: '涨跌', field: 'updown', sortable: true },
      { name: '连板', align: 'right', label: '连板', field: 'hcount', sortable: true },
      { name: '历史', align: 'center', label: '历史', field: 'RGene', sortable: true },
    ]);

    const columnstock = ref([
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: false},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '流通市值', align: 'right', label: '流通市值', field: 'liutongshizhi', sortable: true },
      { name: '涨跌', align: 'right', label: '涨跌', field: 'orate', sortable: true },
      { name: '开盘金额', align: 'right', label: '开盘金额', field: 'oamo', sortable: true },
      { name: '昨日换手', align: 'right', label: '昨日换手', field: 'HSL', sortable: true },
      { name: '基因', align: 'right', label: '基因', field: 'RGene', sortable: true },
      { name: '3日涨幅', align: 'right', label: '3日涨幅', field: 'RATE3', sortable: true },
      { name: '5日涨幅', align: 'right', label: '5日涨幅', field: 'RATE5', sortable: true },
      { name: '排序', align: 'right', label: '排序', field: 'asort_', sortable: true },
      { name: '涨停', align: 'right', label: '涨停', field: 'hprice', sortable: true },
      { name: '连板', align: 'right', label: '连板', field: 'hcount', sortable: true },
      { name: 'Tag', align: 'left', label: 'Tag', field: 'tag', sortable: true },
      { name: '备注', align: 'left', label: '备注', field: 'memos', sortable: true },
    ]);


    
    return { lPreStockDataOption, rowslimitup:ref(), rowslimitdown:ref(), rowsnegative:ref(), rowshigh:ref(), rowstop20:ref(), columnslimitup, columnstop20, columnstart, columnsins, columnstock, rowsmiddle:ref(), rowslow:ref(), ones:ref(), twos:ref(), three:ref(), tab: ref('start'), emote:ref(), loading:ref(), rowstart:ref(), rowsins:ref(), rowstock:ref(), date:ref(), M3Option:ref({}), M2Option:ref({}), M1Option:ref({}), M4Option:ref({}), M0Option:ref({})};
      
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
  height: 260px

</style>




