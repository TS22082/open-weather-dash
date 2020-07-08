const express = require("express");
const session = require("express-session");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

app.use(
  session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })
);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
});
