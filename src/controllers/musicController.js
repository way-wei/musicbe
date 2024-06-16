const Music = require('../models/musicModel');

exports.createMusic = async (req, res) => {
    try {
      const { name, artist } = req.body;
      const result = await Music.create(name,artist);
      if (!result.success) {
        return res.status(400).json({ success: false, error: '無法新增歌曲' });
      }
      res.json({ success: true, message: '歌曲新增成功' });
    } catch (err) {
      res.status(500).json({ success: false, error: '伺服器錯誤，無法新增歌曲' });
    }
  };

  exports.getAllMusics = async (req, res) => {
    try {
      const result = await Music.findAll();
      res.json({ success: true, data: result });
    } catch (err) {
      res.status(500).json({ success: false, error: '伺服器錯誤，無法獲取歌曲列表' });
    }
  };