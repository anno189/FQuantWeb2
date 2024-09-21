<template>
<div class="bg-grey-1">
  <!-- 外盘 -->
  <div class="text-h6 q-pa-sm" id="外盘">外盘 <UpdateTime /> </div>
  <div class="row bg-grey-1 q-pa-sm wrap">
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.DJIA"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.NDX"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=251.HXC"/>
    </div>
    
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=102.CL00Y"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=101.GC00Y"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.N225"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.GDAXI"/>
    </div>

    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.UDI"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=133.USDCNH"/>
    </div>
    <div class="col-2 col-md2">
      <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=119.USDJPY"/>
    </div>
  </div>
  <div class="row text-caption q-pa-sm"> - 数据来源：东方财富 <br />
  - 更新：每次刷新实时获取</div>
  <q-separator inset spaced/>

  <!-- 公告 -->
  <div class="text-h6 q-pa-sm" id="活跃股公告">活跃股公告 <q-badge outline color="primary" align="top" >{{this.ReportDate}} 更新</q-badge></div>
  <div class="row bg-grey-1" v-if="loading">
    
    <div class="col-12 q-pl-sm q-pr-sm">

      <q-table
          class="my-sticky-column-table"
          dense flat bordered
          :rows="rowsReportList"
          :columns="columnsReportList"
          :rows-per-page-options="[10000]"
          row-key="name"
        >

          <template v-slot:body="props">
            <q-tr :props="props" @click="onRowClick(props.row)">
              <q-td key="名称" :props="props">
                {{ props.row.名称 }}
              </q-td>
              <q-td key="代码" :props="props">
                  {{ props.row.code }}
              </q-td>
              <q-td key="今日" :props="props">
                  {{ props.row.today }}
              </q-td>
              <q-td key="公告类型" :props="props">
                  {{ props.row.公告类型 }}
              </q-td>
              <q-td key="公告标题" :props="props">
                <a href="/#/marketfront">{{props.row.公告标题}}</a>
              </q-td>
              <q-td key="公告日期" :props="props">
                  {{ props.row.公告日期 }}
              </q-td>
              <q-td key="风格" :props="props">
                  {{ props.row.blockname }}
              </q-td>
      
            </q-tr>
          </template>

        </q-table>
    </div>
  </div>
  <div class="row text-caption q-pa-sm"> - 数据来源：东方财富 <br />
  - 周期：报告每2小时更新一次，报告周期为两个交易日  <br />
  - 范围：活跃股、行业龙头及交易时间内当日涨幅大于9的个股  <br />
  - 更新：交易时间内每小时更新一次，非交易时间8:00, 20:00更新2次
  </div>

</div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { ref, defineComponent } from 'vue'
import UpdateTime from '~/components/UpdateTime.vue';

export default defineComponent({
  name: 'MarketFrontView',

  components: {
    UpdateTime
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
      const res = await http.get('https://stock.1dian.site/h5/data/mfreport.json', {})
      this.rowsReportList=res.data.report
      this.ReportDate = res.data.date

      for (const element of this.rowsReportList) {
        element.links = 'https://data.eastmoney.com/notices/detail/'+ element.code + '/' + element.公告代码 + '.html'
        }


      this.loading = true  
    }
  },
  
  setup () {
    const rowsReportList = ref({});
    
    const columnsReportList = ref([
      { name: '名称', align: 'left', label: '名称', field: '名称',  },
      { name: '代码', align: 'left', label: '代码', field: 'code' },
      { name: '今日', align: 'left', label: '今日', field: 'today' },
      { name: '公告标题', align: 'left', label: '公告标题', field: '公告标题', },
      { name: '公告类型', align: 'left', label: '公告类型', field: '公告类型' },
      { name: '公告日期', align: 'left', label: '公告日期', field: '公告日期' },
      { name: '风格', align: 'left', label: '风格', field: 'blockname'},
    ]);

    return { loading:ref(), rowsReportList, columnsReportList, ReportDate:ref(),
      onRowClick: (row) =>  window.open(`https://data.eastmoney.com/notices/detail/${row.code}/${row.公告代码}.html`, '_blank'),
     };
  }
  

});

</script>



<style lang="sass">
.my-sticky-column-table
  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #f5f5dc

  td:first-child
    background-color: #f5f5dc

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1


</style>

