import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userLogin = (req, res, next) => {
  const hashedPw = bcrypt.hashSync(req.body.password, 12);
  res.status(200).json({ data: "" });
};

export default userLogin;
