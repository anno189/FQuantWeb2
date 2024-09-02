<template>
  <q-layout view="lHh Lpr fFf">
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
      :width="250"
    >
      <div class="row">
        <LayoutLeftTabEm/>
      </div>
    </q-drawer>

    <q-page-container>
      <!--<MElhbView />-->
      <MELhbOpenView />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);


    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
