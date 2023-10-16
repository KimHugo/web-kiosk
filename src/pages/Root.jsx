import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex w-full h-full">
      <aside className="grid-rows-4 grid h-full w-[20%] items-center">
        <img src="" />
        <Link to={"/1f"}>1F</Link>
        <Link to={"/2f"}>2F</Link>
        <Link to={"/3f"}>3F</Link>
      </aside>
      <Outlet />
    </div>
  );
}