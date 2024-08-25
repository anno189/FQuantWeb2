<template>
  <q-item-label header class="bg-grey-3" >盘中实时 ({{date}})</q-item-label>
  
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketdays'"
    @click="link = 'marketdays'"
    active-class="my-menu-link"
    to="/marketdays" exact>
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
    :active="link === 'emotion'"
    @click="link = 'emotion'"
    active-class="my-menu-link"
    to="/emotion" exact>
    <q-item-section>
      <q-item-label>情绪</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计高标、涨跌停情况，反应当天市场情绪，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'industrylists'"
    @click="link = 'industrylists'"
    active-class="my-menu-link"
    to="/industrylists" exact>
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
