<template>
  <div class="row">
    <q-tabs v-model="tab" vertical class="text-red-9 text-weight-bold">
        <q-tab name="mfront" to="/marketfront" label="盘前" exact />
        <q-tab name="mbidding" to="/marketbidding" label="竞价" exact />
        <q-tab name="mdays" to="/marketdays" label="盘中" exact />
        <q-tab name="memo" to="/emolhb" label=" 情绪" exact />
        <q-tab name="mafter" to="/marketatfer" label="盘后" exact />
        <q-tab name="fundowner" to="/fundowner" label="组合" exact />
        <q-tab name="mstatus" to="/marketstatus" label="市场" exact />
      </q-tabs>
      <div class="col">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="mfront">
            <LeftMarketFront :date= "today" />
          </q-tab-panel>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="mbidding">
            <LeftMarketBidding :date= "today" />
          </q-tab-panel>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="mdays">
            <LeftMarketDays :date= "today" />
          </q-tab-panel>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="memo">
            <LeftMarketEmo :date= "today" />
          </q-tab-panel>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="mafter">
            <LeftMarketAfter :date= "today" />
          </q-tab-panel>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="fundowner">
            <LeftFundOwner :date= "today" />
          </q-tab-panel>
          <q-tab-panel class="bg-grey-1 q-pa-none q-mx-none" name="mstatus">
            <LeftMarketStatus :date= "today" />
          </q-tab-panel>
        </q-tab-panels>
      </div>
  </div>
</template>

<script>
import http from '../utils/http'
import { ref } from 'vue';

export default {
  mounted: function () {
    this.loadData()
  },

  setup() {
    const today = ref(null);

    async function loadData () {
      //const res = await $fetch('https://stock.1dian.site/h5/data/webbaseinfo.json')

      const res = await http.get('https://stock.1dian.site/h5/data/webbaseinfo.json', {})
      today.value = res.data.date
    }

    return {
      tab: ref('mdays'), loadData, today
    };

    
  }


}
</script>
