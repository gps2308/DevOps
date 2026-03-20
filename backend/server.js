const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  user: "admin",
  host: "database",
  database: "mydb",
  password: "admin",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

app.listen(3000, () => console.log("Server running on port 3000"));
