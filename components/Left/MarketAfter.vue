<template>
  <q-item-label header class="bg-grey-3" v-if="date">盘后分析 ({{date}})</q-item-label>
  
  <q-separator />
  
  <q-item 
    clickable
    v-ripple
    :active="link === 'detail'"
    @click="link = 'detail'"
    active-class="my-menu-link"
    to="/after/detail" exact>
    <q-item-section>
      <q-item-label>综合</q-item-label>
      <q-item-label overline>每日19:00/隔日8:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'maemotion'"
    @click="link = 'maemotion'"
    active-class="my-menu-link"
    to="/after/maemotion" exact>
    <q-item-section>
      <q-item-label>情绪</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'widthindex'"
    @click="link = 'widthindex'"
    active-class="my-menu-link"
    to="/after/widthindex" exact>
    <q-item-section>
      <q-item-label>宽指</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketstyle'"
    @click="link = 'marketstyle'"
    active-class="my-menu-link"
    to="/after/marketstyle" exact>
    <q-item-section>
      <q-item-label>风格</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'industry'"
    @click="link = 'industry'"
    active-class="my-menu-link"
    to="/after/industry" exact>
    <q-item-section>
      <q-item-label>行业</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'concept'"
    @click="link = 'concept'"
    active-class="my-menu-link"
    to="/after/concept" exact>
    <q-item-section>
      <q-item-label>概念</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'monery'"
    @click="link = 'monery'"
    active-class="my-menu-link"
    to="/after/monery" exact>
    <q-item-section>
      <q-item-label>资金</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  <!--
  <q-item 
    clickable
    v-ripple
    :active="link === 'outer'"
    @click="link = 'outer'"
    active-class="my-menu-link"
    to="/after/outer" exact>
    <q-item-section>
      <q-item-label>外盘</q-item-label>
      <q-item-label overline>隔日8:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
  
  <q-item 
    clickable
    v-ripple
    :active="link === 'exit'"
    @click="link = 'exit'"
    active-class="my-menu-link"
    to="/after/exit" exact>
    <q-item-section>
      <q-item-label>退市/停牌</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />
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

