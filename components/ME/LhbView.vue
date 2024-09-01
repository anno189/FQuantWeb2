<template>
  <div class="row" >

    <div class="col-12 col-md" v-if="loading">
      <div class="text-h6 q-pa-sm">龙虎榜提示</div>
      <div class="text-body2 q-pa-sm">
        <b>风险：</b><br />
        - 东方财富: {{ warn.east}}<br />
        - 开源证券: {{ warn.kaiyuan}}<br />
        - 量化: {{ warn.lianghua}}<br />
        <q-separator spaced/>
        <b>游资：</b><br />
        - <span class="text-green">桑田路</span>: {{ warn.sangtianlu}}<br />
        - <span class="text-green">朱雀大街</span>: {{ warn.zhuquedajie}}<br />
        - <span class="text-green">上塘路</span>: {{ warn.shangtanglu}}<br />
        - <span class="text-red">中关村大街</span>: {{ warn.zhongguancundajie}}<br />
        - <span class="text-red">珍珠路</span>: {{ warn.zhenzhulu}}<br />
        - <span class="text-red">太平南路</span>: {{ warn.taipingnanlu}}<br />
        - <span class="text-red">鼓楼南路</span>: {{ warn.gulounanlu}}<br />
        <q-separator spaced/>
        <b>负反馈：</b><br />
        {{ warn.fufankui }}<br />
      </div>
    </div>

  </div>
  <q-separator inset spaced />

  <div>
    <div class="text-h6 q-pa-sm">接力可能</div>
    <div class="col-12" v-if="this.loading">
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense flat bordered
          :rows="rowzhengfankui"
          :columns="columnzhengfankui"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>
    </div>
  </div>

  <q-separator inset spaced/>
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
      
      const res1 = await http.get('https://stock.1dian.site/h5/data/lhb.json', {})
      
      this.warn = res1.data.data.lhb.warn

      this.rowzhengfankui = res1.data.data.lhb.table.zhengfankui
      let col = res1.data.data.lhb.table.col

      this.columnzhengfankui = new Array(col.length)

      for (let i = 0; i < col.length; i++) {
        if ( col[i] == 'name')
          this.columnzhengfankui[i] = { name: col[i], align: 'left', label: '名称', field: col[i], sortable: false}
        else if ( col[i] == 'code')
          this.columnzhengfankui[i] = { name: col[i], align: 'left', label: '代码', field: col[i], sortable: false}
        else if ( col[i] == 'z1')
          this.columnzhengfankui[i] = { name: col[i], align: 'left', label: '正', field: col[i], sortable: false}
        else if ( col[i] == 'f1')
          this.columnzhengfankui[i] = { name: col[i], align: 'left', label: '负', field: col[i], sortable: false}
        else
          this.columnzhengfankui[i] = { name: col[i], align: 'left', label: col[i], field: col[i], sortable: false}
      }
        
      this.loading = true;

    }
  },

  setup () {
    const rowzhengfankui = ref({});
    const columnzhengfankui = ref({});
    
    return { rowzhengfankui, columnzhengfankui, loading:ref(), warn:ref()};

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
