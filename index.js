// 引入Express模塊
const express = require('express');

// 創建一個Express應用。這是所有Express應用的起點。
const app = express();

// 定義一個端口號，用於服務器監聽。這個值可以是任何未被佔用的端口。
const port = 8000;

// 定義一個路由。當HTTP請求是GET方法，且路徑為根目錄("/")時，將執行此回調函數。
app.get('/', (req, res) => {
  // 發送一個響應給客戶端。這裡的響應是一個簡單的文字"Hello World!"。
  res.send('Hello World!');
});

// 啟動服務器，並監聽之前定義的端口（8000）。服務器啟動後，會執行回調函數中的代碼。
app.listen(port, () => {
  // 在控制台打印一條消息，表示服務器已經成功啟動。
  console.log(`Example app listening at http://localhost:${port}`);
});