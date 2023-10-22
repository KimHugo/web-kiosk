import React from "react";
import { MdOutlineRoom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SecondFloor() {
  return (
    <div className="bg-orange-400 w-[80%] flex justify-center items-center">
      <div className="bg-contain bg-no-repeat bg-[url('./imgs/2f.png')] mt-[23%] w-full h-full">
        <div className="relative w-full h-full">
          <Link
            className="fixed top-[380px] left-[1110px] right-0"
            to={"/room/2fS201"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          <Link
            className="fixed top-[380px] left-[1130px] right-0"
            to={"/room/2fS204"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          <Link
            className="fixed top-[380px] left-[1150px] right-0"
            to={"/room/2fS206"}
          >
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
