import React from "react";
import { MdOutlineRoom } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FirstFloor() {
  return (
    <div className="bg-contain bg-no-repeat bg-[url('./imgs/1f.png')] w-full">
      Hello, First Floor!
      <div>
        <Link to={"/room/1fRoom1"}>
          <MdOutlineRoom />
        </Link>
        <Link to={"/room/1fRoom2"}>
          <MdOutlineRoom />
        </Link>
        <Link to={"/room/1fRoom3"}>
          <MdOutlineRoom />
        </Link>
      </div>
    </div>
  );
}
