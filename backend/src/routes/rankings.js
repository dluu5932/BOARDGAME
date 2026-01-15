const express = require('express');
const router = express.Router();
const db = require('../db/knex');
const authMiddleware = require('../middlewares/authMiddleware'); // ✅ sửa lại

router.get('/:gameId', authMiddleware, async (req, res) => {
  try {
    const rankings = await db('rankings')
      .where({ game_id: req.params.gameId })
      .orderBy('score', 'desc');
    res.json(rankings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rankings', details: err.message });
  }
});

module.exports = router;
