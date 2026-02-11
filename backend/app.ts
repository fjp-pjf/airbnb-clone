import express from "express";
import hotelRoutes from "./routes/hotelRoutes";

const app = express();
app.use(express.json());

app.use("/hotels", hotelRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
