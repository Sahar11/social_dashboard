const express = require("express");
const app = express();
// declarations
require('dotenv').config()
// db connection
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const cors = require("cors");
const { ENVIROMENT, PORT } = process.env;
const bodyParser = require('body-parser');
//routes
const userRoute = require("./routes/users");

//app.use(bodyParser.json());
//middleware
app.use(cors());
app.use(express.json());

//route
app.use("/users", userRoute(db));


app.get('/', async (req, res) => {
  try {

    const results = await db.query('SELECT * FROM users');
    res.json(results);
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => {
  console.log(`Server has started on port {PORT} 🙂` );
});