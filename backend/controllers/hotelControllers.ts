import { hotels } from "../data/hotels";

const getHotelList = (req, res) => {
  res.status(200).json({ data: hotels });
};

export default getHotelList;