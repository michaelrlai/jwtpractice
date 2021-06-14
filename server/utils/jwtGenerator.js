require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtGenerator = (user_id) => {
  const payload = {
    user: user_id,
  };

  return jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
};

module.exports = jwtGenerator;
