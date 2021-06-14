require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const authRouter = require('./routes/auth');
const dashboardRouter = require('./routes/dashboard');

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
