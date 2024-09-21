<template>
  <VitePwaManifest />
  <NuxtLayout>
      <q-layout view="lHh LpR fFf">
        <q-header elevated class="bg-red-4">
          <q-toolbar>
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />

            <LayoutHeader />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="leftDrawerOpen"
          show-if-above
          bordered
          class="bg-grey-1 text-black"
          :width="220"
        >
          <div class="row">
            <LayoutLeftTab/>
          </div>
        </q-drawer>

        <q-drawer show-if-above side="right" bordered :width="140" class="bg-grey-1 text-black"> 
          <!-- drawer content -->
          <q-item-label header class="bg-grey-3" >目录</q-item-label>
          <q-separator />
          <template v-for="item in this.store.alinks">             
            <q-item clickable v-ripple :href="'#'+item">
              <q-item-section> {{ item }} </q-item-section>
            </q-item>
            <q-separator />
          </template>
          
        </q-drawer>

        <q-page-container id='page-container'>
          <!--<router-view name="Main"></router-view>-->
          <NuxtPage />
        </q-page-container>
        <!--
        <q-footer elevated class="bg-grey-8 text-white">
          <div class="text-sm">Title</div>
        </q-footer>
        -->
      </q-layout>
    
  </NuxtLayout>
</template>


<script>
import { ref  } from 'vue';

export default {
  name: 'MainLayout',

  mounted() {
    console.log('app mounted')
    

    console.log(this.store.alinks)
  },
  
  setup() {
    console.log('setup')
    const leftDrawerOpen = ref(false);
    const store = useAlinksStore()
    
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      store,
    };
  },
};
</script>

