const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Test route để check server ---
app.get('/', (req, res) => {
  res.send('Backend API is running...');
});

// --- Import routes ---
const testRoutes = require('./routes/test.js');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/users.js');
const gameRoutes = require('./routes/games.js');
const friendRoutes = require('./routes/friends.js');
const messageRoutes = require('./routes/messages.js');
const achievementRoutes = require('./routes/achievements.js');
const rankingRoutes = require('./routes/rankings.js');

// --- Gắn routes vào app ---
app.use('/api', testRoutes);              // test thử
app.use('/auth', authRoutes);             // đăng ký / đăng nhập
app.use('/users', userRoutes);            // quản lý user
app.use('/games', gameRoutes);            // danh sách game
app.use('/friends', friendRoutes);        // kết bạn
app.use('/messages', messageRoutes);      // chat
app.use('/achievements', achievementRoutes); // thành tựu
app.use('/rankings', rankingRoutes);      // bảng xếp hạng

// --- Khởi động server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
