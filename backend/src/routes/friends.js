const express = require('express');
const router = express.Router();
const db = require('../db/knex');
const authMiddleware = require('../middlewares/authMiddleware'); // ✅ sửa lại

router.get('/:userId', authMiddleware, async (req, res) => {
  try {
    const friends = await db('friends').where({ user_id: req.params.userId });
    res.json(friends);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch friends', details: err.message });
  }
});

module.exports = router;
