<template>
  <q-badge outline color="primary" align="top" >{{this.getToday()}} 更新</q-badge>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';



export default defineComponent({
  name: 'UpdateTime',

  setup () {
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
    };

    return { getToday }
  }
  
});


</script>

