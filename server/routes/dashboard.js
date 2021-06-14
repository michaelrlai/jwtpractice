const router = require('express').Router();
const db = require('../db/db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async (req, res) => {
  try {
    const user = await db.query(
      'SELECT user_name FROM users where user_id = $1',
      [req.user]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
