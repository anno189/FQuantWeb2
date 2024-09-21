<template>
  <div class="text-h6 q-pa-sm" id="竞价结果列表"> 竞价结果 </div>
    
  <template v-if="this.loading">
    <div class="col-12">
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-header-column-table"
          dense flat bordered
          :rows="this.data.data"
          :columns="anaslysiscolumns"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>

      </div>
    </div>
  </template>
  <q-separator inset spaced/>
    
  <div class="text-h6 q-pa-sm" id="竞价结果分时"> 竞价结果分时 </div>
  <template v-if="this.loading">
    <div class="row bg-grey-1 q-pa-sm wrap" >
      <template v-for="code in this.data.code">
        <div class="col-2 col-md-2">
          <q-img :src="code" /> 
        </div>
      </template>
    </div>
  </template>
    
  <q-separator inset spaced/>
  
</template>

<script lang=“ts”>
import http from '../utils/http'

import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'OpenAnalysisView',
  
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
      
      const res1 = await http.get('https://stock.1dian.site/h5/data/stock_open_mins_analysis.json', {})
      
      this.data = res1.data

      for (let i = 0; i <  this.data.code.length; i++) {
          if (this.data.code[i][0] == 6)
            this.data.code[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1."+this.data.code[i]
          else
            this.data.code[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0."+this.data.code[i]
      }

      this.anaslysiscolumns = [
          { name: 'code', align: 'left', label: '代码', field: 'code', sortable: false},
          { name: 'name', align: 'left', label: '名称', field: 'name', sortable: false},
          { name: 'YQ1', align: 'left', label: '超预期', field: 'YQ1', sortable: false},
          { name: 'YQ0', align: 'left', label: '预期内', field: 'YQ0', sortable: false},
          { name: 'CYQ', align: 'left', label: '断板', field: 'CYQ', sortable: false},
          { name: 'JJ', align: 'left', label: '放量', field: 'JJ', sortable: false},
          { name: 'RA', align: 'left', label: '涨幅', field: 'RA', sortable: false},
          { name: 'orate', align: 'left', label: '涨幅', field: 'orate', sortable: false},
          { name: 'hsl', align: 'left', label: '换手', field: 'hsl', sortable: false},
          { name: 'bid1amo', align: 'left', label: '封单', field: 'bid1amo', sortable: false},
          { name: 'hcount', align: 'left', label: '连板', field: 'hcount', sortable: false},
          { name: 'step', align: 'left', label: '备注', field: 'step', sortable: false},
          { name: 'FX', align: 'left', label: '风险', field: 'FX', sortable: false},
        ]

      this.loading = true;

    }
  },

  setup () {
    return { loading:ref(), anaslysiscolumns:ref()};
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
