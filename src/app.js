import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import {PORT} from "./config.js"

const app = express();

app.use(cors());

app.get("/categories", async (req, res) => {
  try {
    const [products] = await pool.query("SELECT * FROM category");
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM product WHERE category = ${id}`
    );
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

app.get("/categories/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM product WHERE name LIKE "%${name}%"`
    );
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT);

console.log("Server listening on", PORT);
