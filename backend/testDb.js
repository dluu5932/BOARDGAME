// testDb.js
require('dotenv').config(); // load .env
const db = require('./src/db/init');

async function test() {
  try {
    const result = await db.raw('SELECT 1+1 AS sum');
    console.log('DB connected, test result:', result.rows[0].sum);
  } catch (err) {
    console.error('DB connection error:', err);
  } finally {
    await db.destroy(); // đóng kết nối
  }
}

test();
