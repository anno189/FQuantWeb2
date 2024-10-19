//import { createPinia } from 'pinia';
import { useStockPoolStore } from '@/composables/jsonpool'

//const pinia = createPinia();

export default defineEventHandler(async (event) => {
  console.log('Get')
  // 处理`api/foo`端点的POST请求
  console.log(event.context)
  //const body = await readBody(event)
  //console.log(body)
  //const pools = useStockPoolStore(pinia)
  //pools.setPools(body) 


})
