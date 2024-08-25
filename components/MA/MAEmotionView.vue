<template>
<q-page style="padding-top: 46px">
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel class="bg-grey-1" name="highstock">
      <div class="q-pa-sm">
        <v-chart class="chart" :option="highstockchart" autoresize/>
      </div>
      <div class="q-pa-sm">
        <v-chart class="chart" :option="limitupchart" autoresize/>
      </div>
      <div class="q-pa-sm">
        <v-chart class="chart" :option="emotionchart" autoresize/>
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
          <q-tab name="highstock" label="情绪" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>
  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'


import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  BarChart
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

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  MarkAreaComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])


export default defineComponent({
  name: 'MAEmotionView',
  components: {
    VChart
  },

  mounted: function () {
    this.getData()
  },
  methods: {
    getData: async function () {
      
      const res1 = await http.get('https://stock.1dian.site/h5/data/higtstock.json', {})
      this.highstockchart = res1.data

      const res2 = await http.get('https://stock.1dian.site/h5/data/market_limitup.json', {})
      this.limitupchart = res2.data

      const res3 = await http.get('https://stock.1dian.site/h5/data/market_emotion.json', {})
      this.emotionchart = res3.data
      
      }
    },

  setup () {
    
    return { highstockchart: ref({}), limitupchart: ref({}),  emotionchart: ref({}), tab: ref('highstock')};

  }
});
</script>


<style lang="sass">

.chart
  height: 520px

</style>









