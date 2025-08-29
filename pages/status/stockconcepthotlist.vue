<template>
  
  <div class="text-h6 q-pa-sm" id="主题概念">主题概念</div>
    
  <q-item-label header v-if="loading">近5日新增主题概念：{{titlenew}}</q-item-label>

  <div class="q-pa-sm" v-if="loading">
    <q-table
      class="my-sticky-header-column-table my-sticky-header-height-table"
      dense flat bordered
      :rows="rowStockconcepthotlist"
      :columns="columnStockconcepthotlist"
      :rows-per-page-options="[10000]"
      row-key="name"
    >
      <template v-slot:body-cell="props">
        <q-td
          :props="props"
          :class="(props.row.RATE >0 & props.row.RATE < 5)?'bg-red-1':(props.row.RATE >=5 & props.row.RATE < 9)?'bg-red-2':(props.row.RATE >=9)?'bg-red-3':(props.row.RATE < 0 & props.row.RATE > -7 )?'bg-green-1':(props.row.RATE <= -7)?'bg-green-3':''"
        >
          {{props.value}}
        </q-td>
      </template>
    </q-table>
  </div>
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
      const res1 = await http.get('https://stock.1dian.site/h5/data/stock_concept_hot_list.json', {})

      this.rowStockconcepthotlist = res1.data.data.con.new.data;
      this.titlenew  = res1.data.data.con.new.lists;

      this.loading = true
      }
    },
  setup () {
    
    const rowStockconcepthotlist = ref({});
    
    const columnStockconcepthotlist = ref([
      { name: '时间', align: 'left', label: '时间', field: 'date' },
      { name: '代码', align: 'left', label: '代码', sortable:true, field: 'code' },
      { name: '名称', align: 'left', label: '名称', sortable:true, field: 'name' },
      { name: '涨幅', align: 'right', label: '涨幅', field: 'RATE' },
      { name: '概念', align: 'left', label: '概念', sortable:true, field: 'cname' },
      { name: '备注', align: 'left', label: '备注', field: 'memo' },
    ]);

    return { loading:ref(), rowStockconcepthotlist, columnStockconcepthotlist, tab: ref('mstatusdata')};
  }
});
</script>


<style lang="sass">
.my-sticky-header-height-table
  height: 580px

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





