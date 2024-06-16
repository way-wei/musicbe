const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST, // 資料庫ip
  port:process.env.DB_PORT, // 資料庫port
  user: process.env.DB_USER, // 使用者名稱
  password: process.env.DB_PASSWORD, // 密碼
  database: process.env.DB_NAME, // 資料庫名稱
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 使用getConnection()嘗試從池中獲取一個連接
pool.getConnection()
  .then(conn => {
    console.log('MySQL連接成功！');
    createTable(conn);
    conn.release(); // 釋放連接
  })
  .catch(err => {
    // 如果無法獲取連接，可能是連接訊息錯誤或資料庫尚未啟動
    console.error('無法連接到MySQL資料庫:', err);
  });

  async function createTable(conn) {
    try {
      const [rows, fields] = await conn.query(`
        CREATE TABLE IF NOT EXISTS music (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          artist VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('資料表 music 新增成功');
    } catch (err) {
      console.error('資料表新增錯誤', err.stack);
    }
  }
  
module.exports = pool;