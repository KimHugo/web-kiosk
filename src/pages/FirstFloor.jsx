import React from "react";
import { MdOutlineRoom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FirstFloor() {
  return (
    <div  className="bg-[#FF0000] w-[80%] flex justify-center items-center">
      <div className="bg-contain bg-no-repeat bg-[url('./imgs/1f.png')] w-full h-full">
        <div className="relative w-full h-full">
          <Link className="fixed top-[430px] left-[1110px] right-0" to={"/room/1F_VS"}>
            <MdOutlineRoom className="w-[50px] h-[50px]" />
          </Link>
          {/* <Link to={"/room/1fRoom2"}>
            <MdOutlineRoom />
          </Link>
          <Link to={"/room/1fRoom3"}>
            <MdOutlineRoom />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
