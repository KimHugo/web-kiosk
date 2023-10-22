import React from "react";
import { MdOutlineRoom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SecondFloor() {
  return (
    <div className="bg-[#FF8800] w-[80%] flex justify-center items-center">
      <div className="bg-contain bg-no-repeat bg-[url('./imgs/2f.png')] w-full h-full">
        <div className="relative w-full h-full">
          <Link
            className="fixed top-[28vw] left-[720px] right-0 w-[70px] h-[70px]"
            to={"/room/2f_S201"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          <Link
            className="fixed top-[28vw] left-[450px] right-0 w-[70px] h-[70px]"
            to={"/room/2f_S204"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          <Link
            className="fixed top-[44vw] left-[542px] right-0 w-[70px] h-[70px]"
            to={"/room/2f_S206"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
