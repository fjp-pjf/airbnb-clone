"use client";
import { useState } from "react";
import { ArrowUp } from "feather-icons-react";
import { ArrowDown } from "feather-icons-react";

const Clock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  // following 24 hours format
  const increaseHours = () => {
    const numHours = Number(hours);
    if (numHours >= 24) {
      setHours("00");
      return;
    }

    const increasedHours = (numHours + 1).toString().padStart(2,"0");
    setHours(increasedHours);
  };

  const decreaseHours = () => {
    const numHours = Number(hours);
    if(numHours === 0) return;

    const decreasedHours = (numHours - 1).toString().padStart(2, "0");
    setHours(decreasedHours)
  };

  const increaseMinutes = () => {
    const numMinutes = Number(hours);
    if (numMinutes >= 60) {
      setMinutes("00");
      return;
    }

    const increasedMinutes = (numMinutes + 1).toString().padStart(2,"0");
    setMinutes(increasedMinutes);
  };

  const decreaseMinutes = () => {
    const numMinutes = Number(hours);
    if (numMinutes >= 60) {
      setHours("00");
      return;
    }

    const increasedMinutes = (numMinutes - 1).toString().padStart(2,"0");
    setHours(increasedMinutes);
  };

  return (
    <div className="h-screen w-screen flex justify-center align-center">
      <div className="flex flex-col justify-center align-center">
        <div className="flex gap-2">
          <button
            onClick={increaseHours}
            className="flex justify-center w-100 cursor-pointer border p-2"
          >
            <ArrowUp />
          </button>
          <button
            onClick={increaseMinutes}
            className="flex justify-center w-100 cursor-pointer border p-2"
          >
            <ArrowUp />
          </button>
        </div>
        <button className="flex justify-center border my-2 p-4 bg-white text-black text-xl font-black">
          {hours} : {minutes}
        </button>
        <div className="flex gap-2">
          <button onClick={decreaseHours} className="flex justify-center w-100 cursor-pointer border p-2">
            <ArrowDown />
          </button>
          <button onClick={decreaseMinutes} className="flex justify-center w-100 cursor-pointer border p-2">
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
