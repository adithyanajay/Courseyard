const express = require("express");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "test1234",
    database: process.env.DB_NAME || "courseyard",
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  // eslint-disable-next-line no-console
  console.log("PRODUCTION");
}

app.get("/api/courses", (req, res) => {
  knex("course")
    .select("*")
    .offset(0)
    .limit(30)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });
}

app.listen(port, (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});
