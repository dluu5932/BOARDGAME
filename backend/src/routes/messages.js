const express = require('express');
const router = express.Router();
const db = require('../db/knex');
const authMiddleware = require('../middlewares/authMiddleware'); // ✅ sửa lại

router.get('/', authMiddleware, async (req, res) => {
  try {
    const games = await db('games').select('*');
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch games', details: err.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const game = await db('games').where({ id: req.params.id }).first();
    if (!game) return res.status(404).json({ error: 'Game not found' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch game', details: err.message });
  }
});

module.exports = router;
