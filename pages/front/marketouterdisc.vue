<template>
<div class="bg-grey-1">
  <!-- 外盘 -->
  <div class="text-h6 q-pa-sm" id="指数">指数 <UpdateTime /> </div>
  <div class="row bg-grey-1 q-pa-sm wrap">
    <template v-for="item in this.OUTINDEX">
      <div class="col-2 col-md2">
        <q-img :src="`https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=${item}`" />
      </div>            
    </template>
  </div>
  <q-separator inset spaced/>

  <!-- 大宗 -->
  <div class="text-h6 q-pa-sm" id="大宗">大宗 <UpdateTime /> </div>
  <div class="row bg-grey-1 q-pa-sm wrap">
    <template v-for="item in this.OUT002">
      <div class="col-2 col-md2">
        <q-img :src="`https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=${item}`" />
      </div>            
    </template>
  </div>
  <q-separator inset spaced/>

  <!-- 汇率 -->
  <div class="text-h6 q-pa-sm" id="汇率">汇率 <UpdateTime /> </div>
  <div class="row bg-grey-1 q-pa-sm wrap">
    <template v-for="item in this.OUT003">
      <div class="col-2 col-md2">
        <q-img :src="`https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=${item}`" />
      </div>            
    </template>
  </div>
  <q-separator inset spaced/>

  <!-- 美股 -->
  <div class="text-h6 q-pa-sm" id="美股">美股 <UpdateTime /> </div>
  <div class="row bg-grey-1 q-pa-sm wrap">
    <template v-for="item in this.OUT001">
      <div class="col-2 col-md2">
        <q-img :src="`https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=${item}`" />
      </div>            
    </template>
  </div>
  <q-separator inset spaced/>


  <div class="row text-caption q-pa-sm"> - 数据来源：东方财富 <br />
  - 更新：每次刷新实时获取</div>
  
</div>
</template>

<script lang=“ts”>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'MarketOuterDisc',


  mounted: function () {
    
    const result = document.getElementsByClassName('text-h6');
    const store = useAlinksStore()
    const alinks = new Array()
    
    for (let i = 0; i <  result.length; i++) {
            alinks.push(result[i].id)
        }
    store.setAlinks(alinks)

    this.getServerMarketData()
    
  },
  methods: {
    getServerMarketData: async function () {
      
      this.loading = true  
    }
  },
  
  setup () {
    const OUTINDEX = ['100.DJIA', '100.SPX', '100.NDX', '251.HXC', '107.YANG', '100.N225', '100.GDAXI']
    const OUT001 = ['105.NVDA', '105.AAPL', '105.MSFT', '105.GOOG', '105.AMZN', '105.TSLA', '105.META']
    const OUT002 = ['102.CL00Y', '112.M00Y', '101.GC00Y', '101.SI00Y', '100.BDI', '100.CRB']
    const OUT003 = ['100.UDI', '133.USDCNH', '119.USDJPY', '119.EURUSD']

    return { loading:ref(), OUTINDEX, OUT001, OUT002, OUT003};
  }
  

});

</script>

