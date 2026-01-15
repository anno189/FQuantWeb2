<!--竞价一字-->
<template>
  <template v-for="item in this.data" v-if="this.loading">
    <div class="text-h6 q-pa-sm" :id="item.title+'列表'"> {{ item.title }}列表 ( {{this.date}})</div>
    <div class="col-12">
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-header-column-table"
          dense flat bordered
          :rows="item.data"
          :columns="item.columns"
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
    <q-separator inset spaced/>
    
    <div class="text-h6 q-pa-sm" :id="item.title+'分时'"> {{ item.title }}分时</div>
    <div class="row bg-grey-1 q-pa-sm wrap" >
      <template v-for="code in item.code">
        <div class="col-2 col-md-2">
          <q-img :src="code" /> 
        </div>
      </template>
    </div>
    
    <q-separator inset spaced/>
  </template>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'LhbView',

  
  mounted: function () {
    this.getServerMarketData()


  },
  methods: {
    getServerMarketData: async function () {
      
      const res1 = await http.get('https://stock.1dian.site/h5/data/jianguan0.json', {})
      const store = useAlinksStore()
      const alinks = new Array()
      
      this.date = res1.data.data.date
      this.data = res1.data.data.jianguan

      for (let j = 0; j < this.data.length; j++){
        
        let colz = this.data[j].col

        let columnsz = new Array(colz.length)

        for (let i = 0; i < colz.length; i++) {
          if ( colz[i] == 'name')
            columnsz[i] = { name: colz[i], align: 'left', label: '名称', field: colz[i], sortable: false}
          else if ( colz[i] == 'code')
            columnsz[i] = { name: colz[i], align: 'left', label: '代码', field: colz[i], sortable: false}
          else if ( colz[i] == 'liutongshizhiZ')
            columnsz[i] = { name: colz[i], align: 'left', label: '市值', field: colz[i], sortable: false}
          else if ( colz[i] == 'amount')
            columnsz[i] = { name: colz[i], align: 'left', label: '成交', field: colz[i], sortable: false}
          else if ( colz[i] == 'R10')
            columnsz[i] = { name: colz[i], align: 'left', label: '10日涨幅', field: colz[i], sortable: false}
          else if ( colz[i] == 'R30')
            columnsz[i] = { name: colz[i], align: 'left', label: '30日涨幅', field: colz[i], sortable: false}
          else if ( colz[i] == 'RATE')
            columnsz[i] = { name: colz[i], align: 'left', label: '日内涨幅', field: colz[i], sortable: false}
          else if ( colz[i] == 'HSL')
            columnsz[i] = { name: colz[i], align: 'left', label: '日内换手', field: colz[i], sortable: false}
          else
            columnsz[i] = { name: colz[i], align: 'left', label: colz[i], field: colz[i], sortable: false}
        }

        this.data[j].columns = columnsz

        for (let i = 0; i <  this.data[j].code.length; i++) {
            if (this.data[j].code[i][0] == 6)
              this.data[j].code[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1."+this.data[j].code[i]
            else
              this.data[j].code[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0."+this.data[j].code[i]
        }

        alinks.push(this.data[j].title+'列表')
        alinks.push(this.data[j].title+'分时')

      }

      store.setAlinks(alinks)
  

      this.loading = true;

    }
  },

  setup () {
    return {  loading:ref()};
  }
});

</script>

<style lang="sass">
.my-sticky-header-column-table
  
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
