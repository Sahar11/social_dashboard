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

//middleware
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log("Server has started on port 3001 🙂" );
});