const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST || "127.0.0.1",
//     user: process.env.DB_USER || "postgres",
//     password: process.env.DB_PASSWORD || "test1234",
//     database: process.env.DB_NAME || "courseyard",
//   },
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});
