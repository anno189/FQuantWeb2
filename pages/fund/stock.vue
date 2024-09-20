<template>
  <div class="bg-grey-1" v-if="StockOption.str60_base">
    <div class="row">
      <div class="text-h6 q-pa-sm">60日突破({{StockOption.str60_base.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.str60_base.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">标准心理({{StockOption.strdays_all.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.strdays_all.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">突破可能({{StockOption.breakthrough.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.breakthrough.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">趋势可能({{StockOption.strong.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.strong.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">情绪可能({{StockOption.str_emotion.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.str_emotion.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">Pinbar({{StockOption.pinbar_base.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.pinbar_base.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">金额策略({{StockOption.str_amount.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.str_amount.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">辨识度({{StockOption.str_focus.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.str_focus.plist}}</div>
    </div>
    <q-separator inset spaced />
    
  </div>
  
</template>

<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'StockView',
  
  mounted: function () {
    this.getServerMarketData()
  },
  

  methods: {
    getServerMarketData: async function () {
      const res = await http.get('https://stock.1dian.site/h5/data/pools.json', {})
      this.StockOption = res.data
      console.log(res.data)

    }
  },


  setup () {
    const StockOption = ref({});
    
    return { StockOption,};

  },
  

});

</script>
