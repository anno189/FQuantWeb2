<template>
<q-page style="padding-top: 46px">
  
  <q-tab-panels v-model="tab" animated>

    <q-tab-panel class="bg-grey-1" name="mstatusdata" >
      <q-item-label header v-if="data">{{data.date}}</q-item-label>

      <div class="q-pa-sm" v-if="loading">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsMstatus"
          :columns="columnsMstatus"
          :rows-per-page-options="[10000]"
          row-key="name"
        />
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
          <q-tab name="mstatusdata" label="市场状态" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>
  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'


export default defineComponent({
  name: 'MarketStatus',
  
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
      const res1 = await http.get('https://stock.1dian.site/h5/data/JsonMarketStatus.json', {})

      this.rowsMstatus = res1.data.data.mstatus;

      this.loading = true
      }
    },
  setup () {
    
    const data = ref({});
    const rowsMstatus = ref({});
    
    const columnsMstatus = ref([
      { name: '风格', align: 'center', label: '代码', field: 'chance_' },
      { name: '类型', align: 'center', label: '名称', field: 'type_' },
      { name: '状态', align: 'center', label: '行业', field: 'status_' },
      { name: '备注', align: 'center', label: '金额', field: 'recommend_' },
    ]);

    return { loading:ref(), data, rowsMstatus, columnsMstatus, tab: ref('mstatusdata')};
      
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
  height: 520px

</style>









