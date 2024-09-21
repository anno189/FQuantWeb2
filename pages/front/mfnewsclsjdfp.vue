<template>
<div class="bg-grey-1">
  <!-- 外盘 -->
  <div class="text-h6 q-pa-sm" id="财联社焦点复盘"> 财联社焦点复盘 <q-badge outline color="primary" align="top" >{{this.ReportDate}} 更新</q-badge>
  </div>

  <!-- 昨日市场 -->
  <div class="row bg-grey-1" v-if="loading">

  

  <div class="bordered q-pa-md col col-md-9"  v-html="editor"></div>

  </div>

  <div class="row text-caption q-pa-sm"> - 数据来源： 财联社焦点复盘 <br />
  - 周期：每日20点更新格隆汇早报  <br />
  </div>

</div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'MarketFrontView',

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
      const res = await http.get('https://stock.1dian.site/h5/data/mfclssubject1135.json', {})
      this.editor=res.data.news
      this.ReportDate = res.data.date

      this.loading = true  


    }
  },
  
  setup () {
    return { loading:ref(), ReportDate:ref(), news:ref(), editor:ref(), 
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

