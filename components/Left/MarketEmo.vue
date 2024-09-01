<template>
  <q-item-label header class="bg-grey-3" v-if="date">盘后分析 ({{date}})</q-item-label>
  
  <q-separator />
  
  <q-item 
    clickable
    v-ripple
    :active="link === 'emotionlhb'"
    @click="link = 'emotionlhb'"
    active-class="my-menu-link"
    to="/emotionlhb" exact>
    <q-item-section>
      <q-item-label>龙虎榜</q-item-label>
      <q-item-label overline>每日21:00更新</q-item-label>
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

