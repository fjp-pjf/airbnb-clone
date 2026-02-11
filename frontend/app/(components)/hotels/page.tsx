"use client";
import axios from "axios";
import { useEffect } from "react";

const HotelsLandingPage = () => {
  const getHotelList = async () => {
    try {
      const data = await axios.get("http://localhost:8080/hotels");
      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getHotelList();
  }, []);

  return <div>HotelsLandingPage</div>;
};

export default HotelsLandingPage;
