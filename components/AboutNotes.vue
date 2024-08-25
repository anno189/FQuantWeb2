<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{appName}}  {{version}}</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh" class="scroll">
      <p class="text-weight-bold">{{appDescription}}</p>
      <p style="width:500px">Author: {{author}}</p>
      <p>Email: {{email}}</p>
      <p>Powered by: {{powerby}}</p>
    </q-card-section>

    <q-separator />

    <q-card-actions align="center">
      <q-btn flat label="确定" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { appName, appDescription, version, author, email, powerby } from '~/constants';

export default defineComponent({
  name: 'AboutNotes',

  setup() {
    return {
      appName, appDescription, version, author, email, powerby
    }
  }
});
</script>
