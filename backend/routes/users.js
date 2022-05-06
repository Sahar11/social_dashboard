const router = require('express').Router();


module.exports = (db) => {
  // all routes will go here 
  router.get('/', async (req, res) => {
    try {
     //console.table("users are here");
      const results = await db.query('SELECT * FROM users');
      res.json(results);
    } catch (err) {
      console.log(err);
    }
  });
return router;
}