const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const testRoutes = require('./routes/test.js');
app.use('/api', testRoutes);
