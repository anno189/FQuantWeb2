<template>
  <q-item-label header class="bg-grey-3" v-if="date">市场概况 ({{date}})</q-item-label>
  
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketstatus'"
    @click="link = 'marketstatus'"
    active-class="my-menu-link"
    to="/marketstatus" exact>
    <q-item-section>
      <q-item-label>市场状态</q-item-label>
      <!--<q-item-label overline>9:15 - 9:30</q-item-label>-->
      <q-item-label caption>- 市场状态的部分结论内容
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketindustry'"
    @click="link = 'marketindustry'"
    active-class="my-menu-link"
    to="/marketindustry" exact>
    <q-item-section>
      <q-item-label>行业</q-item-label>
      <!--<q-item-label overline>9:15 - 9:30</q-item-label>-->
      <q-item-label caption>- 行业在板块、指数中的占比等
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'indexscatter'"
    @click="link = 'indexscatter'"
    active-class="my-menu-link"
    to="/indexscatter" exact>
    <q-item-section>
      <q-item-label>指数</q-item-label>
      <q-item-label overline>宽指调整日更新，每年更新2次</q-item-label>
      <q-item-label caption>- 宽指之间的重叠关系
      </q-item-label>
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
