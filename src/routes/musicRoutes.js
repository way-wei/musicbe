const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.post('/music',musicController.createMusic);
router.get('/music',musicController.getAllMusics);

router.get('/test', async (req, res) => {
    res.status(200).json({ success: true, error: 'test' })
  }); 

module.exports = router;