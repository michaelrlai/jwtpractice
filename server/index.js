require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const authRouter = require('./routes/auth');

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
