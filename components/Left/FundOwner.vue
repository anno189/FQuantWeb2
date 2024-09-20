<template>
  <q-item-label header class="bg-grey-3" v-if="date">组合研究 ({{date}})</q-item-label>
  
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'fundowner0'"
    @click="link = 'fundowner0'"
    active-class="my-menu-link"
    to="/fund/fundowner0" exact>
    <q-item-section>
      <q-item-label>组合</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
      <q-item-label caption>对比统计当前策略的执行情况。<br />
      展示当前策略的持仓情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'fundowner1'"
    @click="link = 'fundowner1'"
    active-class="my-menu-link"
    to="/fund/fundowner1" exact>
    <q-item-section>
      <q-item-label>组合对照组</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
      <q-item-label caption>对比统计当前策略的执行情况。<br />
      展示当前策略的持仓情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'fundowner4'"
    @click="link = 'fundowner4'"
    active-class="my-menu-link"
    to="/fund/fundowner4" exact>
    <q-item-section>
      <q-item-label>组合应用组</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
      <q-item-label caption>对比统计当前策略的执行情况。<br />
      展示当前策略的持仓情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'stock'"
    @click="link = 'stock'"
    active-class="my-menu-link"
    to="/fund/stock" exact>
    <q-item-section>
      <q-item-label>策略</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
      <q-item-label caption>每日策略池</q-item-label>
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

