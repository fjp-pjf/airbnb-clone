import express from "express";
import getHotelList from "../controllers/hotelControllers";

const router = express.Router();

router.get("/", getHotelList);

export default router;
