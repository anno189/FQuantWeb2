//import { createPinia } from 'pinia';
import { useStockPoolStore } from '@/composables/jsonpool'

//const pinia = createPinia();

export default defineEventHandler(async (event) => {
  // 处理`api/foo`端点的POST请求
  //const query = getQuery(event)
  //console.log(event)
  const body = await readBody(event)
  console.log(body)
  //const pools = useStockPoolStore(pinia)
  //pools.setPools(body) 
  
})

