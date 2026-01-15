const express = require('express');
const router = express.Router();
const db = require('../db/knex'); 
const authMiddleware = require('../middlewares/authMiddleware'); 

// Lấy danh sách tất cả user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await db('users').select('id', 'username');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users', details: err.message });
  }
});

// Lấy thông tin user theo id
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await db('users')
      .where({ id: req.params.id })
      .select('id', 'username')
      .first();
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user', details: err.message });
  }
});

module.exports = router;
