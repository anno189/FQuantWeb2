<template>
  <q-toolbar-title>
    {{ appFullName }}
    <q-badge align="top">{{ version }}</q-badge>
  </q-toolbar-title>

  <div class="text-bold" flat>{{ time }}</div>
  <q-btn flat round @click="this.$router.go(0)" icon="refresh" />
  <q-btn flat round icon="airplay">
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section @click="updated = true"
            >更新日志</q-item-section
          >
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section @click="about = true">关于...</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>

  <q-dialog v-model="updated">
    <release-notes> </release-notes>
  </q-dialog>
  <q-dialog v-model="about">
    <about-notes> </about-notes>
  </q-dialog>
</template>



<script>
import ReleaseNotes from '~/components/ReleaseNotes.vue';
import AboutNotes from '~/components/AboutNotes.vue';
import { version, appFullName } from '~/constants'

export default {
  components: { ReleaseNotes, AboutNotes },

  mounted: function () {
    setInterval(() => {
      this.time = this.getToday();
    }, 1000);

  },

  setup() {
    function getToday() {
      var datas = new Date();
      var on2 = ':';
      var onS = datas.getHours(); //时
      var onF = datas.getMinutes(); //分
      var onN = datas.getSeconds(); //秒

      if (onS >= 0 && onS <= 9) {
        onS = '0' + onS;
      }
      if (onF >= 0 && onF <= 9) {
        onF = '0' + onF;
      }
      if (onN >= 0 && onN <= 9) {
        onN = '0' + onN;
      }

      return onS + on2 + onF + on2 + onN;
    }

    return {
      updated: ref(false),
      about: ref(false),
      time: ref(null),
      getToday, 
      version, appFullName
    };
  },
};
</script>