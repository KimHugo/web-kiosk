import React from "react";
import { MdOutlineRoom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ThirdFloor() {
  return (
    <div className="bg-[#54753F] w-[80%] flex justify-center items-center">
      <div className="bg-contain bg-no-repeat bg-[url('./imgs/3f.png')] w-full h-full">
        <div className="relative w-full h-full">
          <Link
            className="fixed top-[400px] left-[720px] right-0 w-[70px] h-[70px]]"
            to={"/room/3f_S301"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          <Link
            className="fixed top-[400px] left-[545px] right-0 w-[70px] h-[70px]"
            to={"/room/3f_S303"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px] " />
          </Link>
          <Link
            className="fixed top-[410px] left-[1155px] right-0 w-[70px] h-[70px]"
            to={"/room/3f_M301"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          <Link
            className="fixed top-[550px] left-[1200px] right-0 w-[70px] h-[70px]"
            to={"/room/3f_M302"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
