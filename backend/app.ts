import express from "express";
import cors from "cors";
import pool from "./db";

import hotelRoutes from "./routes/hotelRoutes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/hotels", hotelRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
