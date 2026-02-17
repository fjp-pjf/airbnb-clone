import express from "express";
import cors from "cors";
import pool from "./db";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import hotelRoutes from "./routes/hotelRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/hotels", hotelRoutes);
app.use("/auth", authRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
