import { pool } from "../db.js";

export const getAllUsers = async(req, res) => {
  const { rows } = await pool.query("SELECT * FROM users");

  res.json(rows);
};

export const getPing = async (req, res) => {
    const { rows } = await pool.query("SELECT NOW()");

    return res.json(rows);
}