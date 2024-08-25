<template>
  <q-item-label header class="bg-grey-3" v-if="date">竞价 ({{date}})</q-item-label>
  
  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mbprestock'"
    @click="link = 'mbprestock'"
    active-class="my-menu-link"
    to="/mbprestock" exact>
    <q-item-section>
      <q-item-label>竞价结果</q-item-label>
      <q-item-label overline>9:26</q-item-label>
      <q-item-label caption>- 汇总集合竞价情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'predata'"
    @click="link = 'predata'"
    active-class="my-menu-link"
    to="/predata" exact>
    <q-item-section>
      <q-item-label>竞价结果</q-item-label>
      <q-item-label overline>9:26</q-item-label>
      <q-item-label caption>- 开盘竞价结束后统计结果</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'enddata'"
    @click="link = 'enddata'"
    active-class="my-menu-link"
    to="/enddata" exact>
    <q-item-section>
      <q-item-label>收盘竞价</q-item-label>
      <q-item-label overline>15:01</q-item-label>
      <q-item-label caption>- 收盘竞价结束后统计结果</q-item-label>
    </q-item-section>
  </q-item>

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
