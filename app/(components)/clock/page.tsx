"use client";
import { useState } from "react";
import { ArrowUp } from "feather-icons-react";
import { ArrowDown } from "feather-icons-react";

const Clock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  return (
    <div className="h-screen w-screen flex justify-center align-center">
      <div className="flex flex-col justify-center align-center">
        <div className="flex gap-2">
          <button className="flex justify-center w-100 cursor-pointer border p-2">
            <ArrowUp />
          </button>
          <button className="flex justify-center w-100 cursor-pointer border p-2">
            <ArrowUp />
          </button>
        </div>
        <button className="flex justify-center border my-2 p-4 bg-white text-black text-xl font-black">
          {hours} : {minutes}
        </button>
        <div className="flex gap-2">
          <button className="flex justify-center w-100 cursor-pointer border p-2">
            <ArrowDown />
          </button>
          <button className="flex justify-center w-100 cursor-pointer border p-2">
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
