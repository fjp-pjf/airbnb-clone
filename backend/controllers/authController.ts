import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db";

const userRegister = async (req, res, next) => {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!password || !confirmPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const hashedPw = bcrypt.hashSync(password, 12);

    const users = await pool.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPw]
    );

    return res.status(200).json(users.rows[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const userLogin = (req, res, next) => {
  const hashedPw = bcrypt.hashSync(req.body.password, 12);
  res.status(200).json({ data: "" });
};

export default userLogin;
