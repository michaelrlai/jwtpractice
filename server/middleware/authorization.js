require('dotenv').config();
var jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('token');
    if (!token) {
      return res.status(403).json('Not Authorized');
    }

    const payload = jwt.verify(token, process.env.SECRET);

    console.log(payload);
  } catch (err) {
    console.log(err.message);
    return res.status(403).json('Not authorized');
  }
  next();
};
