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
          class="my-sticky-header-column-table"
          dense flat bordered
          :rows="rowzhengfankuiz"
          :columns="columnzhengfankuiz"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>
    </div>
  </div>
  <q-separator inset spaced/>


  <div>
    <div class="text-h6 q-pa-sm">风险警示</div>
    <div class="col-12" v-if="this.loading">
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-header-column-table"
          dense flat bordered
          :rows="rowzhengfankuif"
          :columns="columnzhengfankuif"
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

      this.rowzhengfankuiz = res1.data.data.lhb.table.z.zhengfankui
      let colz = res1.data.data.lhb.table.z.col

      this.columnzhengfankuiz = new Array(colz.length)

      for (let i = 0; i < colz.length; i++) {
        if ( colz[i] == 'name')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '名称', field: colz[i], sortable: false}
        else if ( colz[i] == 'code')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '代码', field: colz[i], sortable: false}
        else if ( colz[i] == 'z1')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '正', field: colz[i], sortable: false}
        else if ( colz[i] == 'f1')
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: '负', field: colz[i], sortable: false}
        else
          this.columnzhengfankuiz[i] = { name: colz[i], align: 'left', label: colz[i], field: colz[i], sortable: false}
      }

      this.rowzhengfankuif = res1.data.data.lhb.table.f.zhengfankui
      let colf = res1.data.data.lhb.table.f.col

      this.columnzhengfankuif = new Array(colf.length)

      for (let i = 0; i < colf.length; i++) {
        if ( colf[i] == 'name')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '名称', field: colf[i], sortable: false}
        else if ( colf[i] == 'code')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '代码', field: colf[i], sortable: false}
        else if ( colf[i] == 'z1')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '正', field: colf[i], sortable: false}
        else if ( colf[i] == 'f1')
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: '负', field: colf[i], sortable: false}
        else
          this.columnzhengfankuif[i] = { name: colf[i], align: 'left', label: colf[i], field: colf[i], sortable: false}
      }
        
      this.loading = true;

    }
  },

  setup () {
    return { rowzhengfankuiz:ref({}), columnzhengfankuiz:ref({}), rowzhengfankuif:ref({}), columnzhengfankuif:ref({}), loading:ref(), warn:ref()};
  }
});

</script>

<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  height: 550px

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
