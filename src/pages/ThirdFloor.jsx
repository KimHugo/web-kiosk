import React from "react";
import { MdOutlineRoom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ThirdFloor() {
  return (
    <div className="bg-[#54753F] w-[80%] flex justify-center items-center">
      <div className="bg-contain bg-no-repeat bg-[url('./imgs/3f.png')] w-full h-full">
        <div className="relative w-full h-full">
          <Link
            className="fixed top-[28vw] left-[50vw] right-0 w-[70px] h-[70px]]"
            to={"/room/3f_S301"}
          >
            <MdOutlineRoom className="w-[3.5vw] h-[3.5vw]" />
          </Link>
          <Link
            className="fixed top-[28vw] left-[38vw] right-0 w-[70px] h-[70px]"
            to={"/room/3f_S303"}
          >
            <MdOutlineRoom className="w-[3.5vw] h-[3.5vw]" />
          </Link>
          <Link
            className="fixed top-[29vw] left-[80.5vw] right-0 w-[70px] h-[70px]"
            to={"/room/3f_M301"}
          >
            <MdOutlineRoom className="w-[3.5vw] h-[3.5vw]" />
          </Link>
          <Link
            className="fixed top-[37.5vw] left-[83.3vw] right-0 w-[70px] h-[70px]"
            to={"/room/3f_M302"}
          >
            <MdOutlineRoom className="w-[3.5vw] h-[3.5vw]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
