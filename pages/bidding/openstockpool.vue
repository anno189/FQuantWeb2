<!--竞价一字-->
<template v-if="loading">
  <div class="text-h6 q-pa-sm" id="全部">全部</div>
  <div class="col-12">
    <div class="q-pa-sm">
      {{ n0 }}
    </div>
  </div>
  <div class="text-h6 q-pa-sm" id="推荐一">推荐一</div>
  <div class="col-12">
    <div class="q-pa-sm">
      {{ n1 }}
    </div>
  </div>
  <q-separator inset spaced/>
  <div class="text-h6 q-pa-sm" id="推荐二">推荐二</div>
  <div class="col-12">
    <div class="q-pa-sm">
      {{ n2 }}
    </div>
  </div>
  <q-separator inset spaced/>
  <div class="text-h6 q-pa-sm" id="概念一">概念一（{{h1ins}}（{{h1count}}））</div>
  <div class="col-12">
    <div class="q-pa-sm">
      {{ h1name }}
    </div>
  </div>
  <q-separator inset spaced/>

  <div v-if="h2count > 0">

    <div class="text-h6 q-pa-sm" id="概念二">概念二（{{h2ins}}（{{h2count}}））</div>
    <div class="col-12">
      <div class="q-pa-sm">
        {{ h2name }}
      </div>
    </div>

    <q-separator inset spaced/>
  </div>

  <div v-if="h3count > 0">
    <div class="text-h6 q-pa-sm" id="概念三">概念三（{{h3ins}}（{{h3count}}））</div>
    <div class="col-12">
      <div class="q-pa-sm">
        {{ h3name }}
      </div>
    </div>

    <q-separator inset spaced/>
  </div>

  <template v-for="item in data.ins" v-if="loading">
    <div class="text-h6 q-pa-sm" :id="item.insname+'('+item.upcount+')'"> {{ item.insname }}({{item.upcount}})</div>
    <div class="col-12">
      <div class="q-pa-sm">
        {{item.name}}
      </div>
    </div>
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
  name: 'OpenStockPool',
  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      
      const res1 = await http.get('https://stock.1dian.site/h5/data/stockopenstatus.json', {})
      const store = useAlinksStore()
      const alinks = new Array()
      alinks.push('推荐一')
      alinks.push('推荐二')
      alinks.push('概念一')
      alinks.push('概念二')
      alinks.push('概念三')

      this.data = res1.data
      this.n0 = res1.data.n0.name
      this.n1 = res1.data.n1.name
      this.n2 = res1.data.n2.name
      this.h1name = res1.data.h1.name
      this.h2name = res1.data.h2.name
      this.h3name = res1.data.h3.name
      this.h1ins = res1.data.h1.insname
      this.h2ins = res1.data.h2.insname
      this.h3ins = res1.data.h3.insname
      this.h1count = res1.data.h1.count
      this.h2count = res1.data.h2.count
      this.h3count = res1.data.h3.count
      
      for (let j = 0; j < this.data.ins.length; j++){
        for (let i = 0; i <  this.data.ins[j].code.length; i++) {
            if (this.data.ins[j].code[i][0] == 6)
              this.data.ins[j].code[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1."+this.data.ins[j].code[i]
            else
              this.data.ins[j].code[i] = "https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0."+this.data.ins[j].code[i]
        }

        alinks.push(this.data.ins[j].insname+'('+this.data.ins[j].upcount+')')

      }

      store.setAlinks(alinks)
  
      this.loading = true;

    }
  },

  setup () {
    return { h1: ref(), h2:ref(), h3:ref(), data:ref(), loading:ref()};
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
