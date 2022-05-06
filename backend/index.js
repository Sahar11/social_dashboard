const express = require("express");
const app = express();
// declarations
require('dotenv').config()
// db connection
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const cors = require("cors");
const morgan = require('morgan');
const { ENVIROMENT, PORT } = process.env;
const bodyParser = require('body-parser');
//routes
const userRoute = require("./routes/users");

//app.use(bodyParser.json());
//middleware
app.use(cors());
app.use(bodyParser.json());
// middleware setup
//app.use(morgan(ENVIROMENT));

//route
app.use("/users", userRoute(db));

app.get('/', (req, res) => res.send("Hello World 🙂 🙂"));

app.listen(8080, () => {
  console.log(`Server is listening on port  🙂` );
});