//import { createPinia } from 'pinia';
import { useStockPoolStore } from '@/composables/jsonpool'
import { PGlite } from "@electric-sql/pglite";

//const pinia = createPinia();

export default defineEventHandler(async (event) => {
  console.log('Get')
  // 处理`api/foo`端点的POST请求
  console.log(event.context)
  //const body = await readBody(event)
  //console.log(body)
  //const pools = useStockPoolStore(pinia)
  //pools.setPools(body) 

  const db = new PGlite('FQuantWeb2-Data')
  console.log('db')
  
  await db.exec(`
  CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    task TEXT,
    done BOOLEAN DEFAULT false
  );
  INSERT INTO todo (task, done) VALUES ('Install PGlite from NPM', true);
  INSERT INTO todo (task, done) VALUES ('Load PGlite', true);
  `)
  
  const res = await db.query("select * from todo;")

  return res.rows

})
