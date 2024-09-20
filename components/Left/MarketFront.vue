<template>
  <q-item-label header class="bg-grey-3" v-if="date">盘前 ({{date}})</q-item-label>
  
  
  <q-separator />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketfront'"
    @click="link = 'marketfront'"
    active-class="my-menu-link"
    to="/front/marketfront" exact>
    <q-item-section>
      <q-item-label>盘前公告</q-item-label>
      <q-item-label overline> - 9:30</q-item-label>
      <q-item-label caption>- 盘前公告信息汇总</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewscctv'"
    @click="link = 'mfnewscctv'"
    active-class="my-menu-link"
    to="/front/mfnewscctv" exact>
    <q-item-section>
      <q-item-label>新闻联播</q-item-label>
      <q-item-label overline> - 00:00</q-item-label>
      <q-item-label caption>- 昨日新闻联播全文</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item-label header class="bg-grey-3" v-if="date">盘前新闻 ({{date}})</q-item-label>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsglhzb'"
    @click="link = 'mfnewsglhzb'"
    active-class="my-menu-link"
    to="/front/mfnewsglhzb" exact>
    <q-item-section>
      <q-item-label>早盘新闻</q-item-label>
      <q-item-label overline> - 08:10</q-item-label>
      <q-item-label caption>- 格隆汇早盘新闻</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsglhpqyd'"
    @click="link = 'mfnewsglhpqyd'"
    active-class="my-menu-link"
    to="/front/mfnewsglhpqyd" exact>
    <q-item-section>
      <q-item-label>盘前要点</q-item-label>
      <q-item-label overline> - 08:10</q-item-label>
      <q-item-label caption>- 格隆汇 盘前要点</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfthszbsd'"
    @click="link = 'mfthszbsd'"
    active-class="my-menu-link"
    to="/front/mfthszbsd" exact>
    <q-item-section>
      <q-item-label>早盘视点</q-item-label>
      <q-item-label overline> - 08:10</q-item-label>
      <q-item-label caption>- 同花顺 早盘视点</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsclsyszb'"
    @click="link = 'mfnewsclsyszb'"
    active-class="my-menu-link"
    to="/front/mfnewsclsyszb" exact>
    <q-item-section>
      <q-item-label>有声早报</q-item-label>
      <q-item-label overline> - 08:10</q-item-label>
      <q-item-label caption>- 财联社 有声早报</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsclstzblz'"
    @click="link = 'mfnewsclstzblz'"
    active-class="my-menu-link"
    to="/front/mfnewsclstzblz" exact>
    <q-item-section>
      <q-item-label>避雷针</q-item-label>
      <q-item-label overline> - 08:30</q-item-label>
      <q-item-label caption>- 财联社 投资避雷针</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsglhmgfp'"
    @click="link = 'mfnewsglhmgfp'"
    active-class="my-menu-link"
    to="/front/mfnewsglhmgfp" exact>
    <q-item-section>
      <q-item-label>隔夜美股</q-item-label>
      <q-item-label overline> - 08:10</q-item-label>
      <q-item-label caption>- 格隆汇隔夜美股复盘</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item-label header class="bg-grey-3" v-if="date">盘后复盘 ({{date}})</q-item-label>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsclsmrsp'"
    @click="link = 'mfnewsclsmrsp'"
    active-class="my-menu-link"
    to="/front/mfnewsclsmrsp" exact>
    <q-item-section>
      <q-item-label>每日收评</q-item-label>
      <q-item-label overline> - 20:10</q-item-label>
      <q-item-label caption>- 财联社每日收评</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsclsjdfp'"
    @click="link = 'mfnewsclsjdfp'"
    active-class="my-menu-link"
    to="/front/mfnewsclsjdfp" exact>
    <q-item-section>
      <q-item-label>焦点复盘</q-item-label>
      <q-item-label overline> - 20:10</q-item-label>
      <q-item-label caption>- 财联社焦点复盘</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
  <q-item 
    clickable
    v-ripple
    :active="link === 'mfnewsclsztqz'"
    @click="link = 'mfnewsclsztqz'"
    active-class="my-menu-link"
    to="/front/mfnewsclsztqz" exact>
    <q-item-section>
      <q-item-label>主题前瞻</q-item-label>
      <q-item-label overline> - 20:10</q-item-label>
      <q-item-label caption>- 财联社主题前瞻</q-item-label>
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
