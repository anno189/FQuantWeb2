//import { createPinia } from 'pinia';
import { useStockPoolStore } from '@/composables/jsonpool'
import { PGlite } from "@electric-sql/pglite";

//const pinia = createPinia();

export default defineEventHandler(async (event) => {
  console.log('Get')
  // 处理`api/foo`端点的POST请求
  const db = new PGlite('FQuantWeb2-Data')
  
  const res = await db.query("select * from todo;")
  return res.rows[1]

})
