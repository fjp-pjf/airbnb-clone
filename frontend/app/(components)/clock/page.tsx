"use client";
import { useState } from "react";
import { ArrowUp } from "feather-icons-react";
import { ArrowDown } from "feather-icons-react";

const Clock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const manageClock = (
    timeType: "hours" | "minutes",
    operationType: "increase" | "decrease"
  ) => {
    const numTime = timeType === "hours" ? Number(hours) : Number(minutes);
    const max = timeType === "hours" ? 23 : 59;

    const next =
      operationType === "increase"
        ? numTime === max
          ? "0"
          : numTime + 1
        : numTime === 0
        ? max
        : numTime - 1;

    const value = next.toString().padStart(2, "0");

    if (timeType === "hours") setHours(value);
    else setMinutes(value);
  };

  return (
    <div className="h-screen w-screen flex justify-center align-center">
      <div className="flex flex-col justify-center align-center">
        <div className="flex gap-2">
          <button
            onClick={() => manageClock("hours", "increase")}
            className="flex justify-center w-100 cursor-pointer border p-2"
          >
            <ArrowUp />
          </button>
          <button
            onClick={() => manageClock("minutes", "increase")}
            className="flex justify-center w-100 cursor-pointer border p-2"
          >
            <ArrowUp />
          </button>
        </div>
        <button className="flex justify-center border my-2 p-4 bg-white text-black text-xl font-black">
          {hours} : {minutes}
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => manageClock("hours", "decrease")}
            className="flex justify-center w-100 cursor-pointer border p-2"
          >
            <ArrowDown />
          </button>
          <button
            onClick={() => manageClock("minutes", "decrease")}
            className="flex justify-center w-100 cursor-pointer border p-2"
          >
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
