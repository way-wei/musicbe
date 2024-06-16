const db = require('../config/database');

const Musics = {
    create: async (name, artist) => {
        const sql = "INSERT INTO music (name, artist) VALUES (?, ?)";
        try {
          await db.query(sql, [name, artist]);
          return { success: true };
        } catch (err) {
          console.error('新增失敗', err);
          return { success: false, error: err };
        }
      },
      // 获取所有球队记录
    findAll: async () => {
        const sql = 'SELECT * FROM music';
        try {
            const [rows] = await db.query(sql);
        return rows;
        } catch (err) {
            console.error('取得失敗', err);
        return [];
        }
    },
}

module.exports = Musics;