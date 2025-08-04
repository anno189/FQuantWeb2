<template>
  <q-item-label header class="bg-grey-3" >盘中实时 ({{date}})</q-item-label>
  
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketdays'"
    @click="link = 'marketdays'"
    active-class="my-menu-link"
    to="/days/marketdays" exact>
    <q-item-section>
      <q-item-label>实时市场</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 实时统计市场状况，指数类每分钟更新，其余统计根据情况每5分钟、每15分钟或每30分钟更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionruntime'"
    @click="link = 'emotionruntime'"
    active-class="my-menu-link"
    to="/emotion/runtime" exact>
    <q-item-section>
      <q-item-label>盘中涨停</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计盘中涨停时间和概念分类</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotion'"
    @click="link = 'emotion'"
    active-class="my-menu-link"
    to="/days/emotion" exact>
    <q-item-section>
      <q-item-label>涨跌停</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计高标、涨跌停情况，反应当天市场情绪，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotion02'"
    @click="link = 'emotion02'"
    active-class="my-menu-link"
    to="/days/emotion02" exact>
    <q-item-section>
      <q-item-label>情绪</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计高标、中位、低位、负反馈情况，实时更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'stock_open_con'"
    @click="link = 'stock_open_con'"
    active-class="my-menu-link"
    to="/days/stock_open_con" exact>
    <q-item-section>
      <q-item-label>优势概念</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计3日、报团、20日、条件的实时情况</q-item-label>
    </q-item-section>
  </q-item>

  <q-item 
    clickable
    v-ripple
    :active="link === 'industrylists'"
    @click="link = 'industrylists'"
    active-class="my-menu-link"
    to="/days/industrylists" exact>
    <q-item-section>
      <q-item-label>板块</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计宽指、行业，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <!--
  <q-item 
    clickable
    v-ripple
    :active="link === 'bond2stocklists'"
    @click="link = 'bond2stocklists'"
    active-class="my-menu-link"
    to="/bond2stocklists" exact>
    <q-item-section>
      <q-item-label>转债</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计转债与正股的成交情况，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>
  -->

</template>

<script>
export default {

  props: {
    date: String
  },

  setup(props) {
    // setup() 接收 props 作为第一个参数
    const router = useRoute()
    
    return {link:ref(router.name)}
  }

}
</script>


<style lang="sass">
.my-menu-link
  background: #ffebee
</style>
