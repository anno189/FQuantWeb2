<template>
  <q-item-label header class="bg-grey-3" v-if="date">盘后分析 ({{date}})</q-item-label>
  
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionyidong'"
    @click="link = 'emotionyidong'"
    active-class="my-menu-link"
    to="/emotion/yidong" exact>
    <q-item-section>
      <q-item-label>异动-今日</q-item-label>
      <q-item-label overline>每晚19:00 更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionyidong2'"
    @click="link = 'emotionyidong2'"
    active-class="my-menu-link"
    to="/emotion/yidong2" exact>
    <q-item-section>
      <q-item-label>异动-昨日</q-item-label>
      <q-item-label overline>每晚19:00 更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  
  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionlhb'"
    @click="link = 'emotionlhb'"
    active-class="my-menu-link"
    to="/emotion/lhb" exact>
    <q-item-section>
      <q-item-label>龙虎榜</q-item-label>
      <q-item-label overline>每日21:00/7:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionlhbopen'"
    @click="link = 'emotionlhbopen'"
    active-class="my-menu-link"
    to="/emotion/lhbopen" exact>
    <q-item-section>
      <q-item-label>竞价放量</q-item-label>
      <q-item-label overline>每日9:28 更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionlhbopenrate'"
    @click="link = 'emotionlhbopenrate'"
    active-class="my-menu-link"
    to="/emotion/lhbopenrate" exact>
    <q-item-section>
      <q-item-label>竞价涨幅</q-item-label>
      <q-item-label overline>每日竞价后/盘中更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionopenanalysis'"
    @click="link = 'emotionopenanalysis'"
    active-class="my-menu-link"
    to="/emotion/openanalysis" exact>
    <q-item-section>
      <q-item-label>竞价结果</q-item-label>
      <q-item-label overline>每日竞价后/盘中更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionpoolslimitma450'"
    @click="link = 'emotionpoolslimitma450'"
    active-class="my-menu-link"
    to="/emotion/poolslimitma450" exact>
    <q-item-section>
      <q-item-label>强势</q-item-label>
      <q-item-label overline>每日竞价后/盘中更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  
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

