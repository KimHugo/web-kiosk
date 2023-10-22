import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex w-full h-full">
      <aside className="grid-rows-4 grid h-full w-[20%] items-center">
        <Link to={"/"}><img className="w-full mt-[10%]" src="/imgs/logo.png" alt="로고"/></Link>
        <Link className="w-full h-full text-7xl text-right text- p-5 bg-red-500 text-white" to={"/1f"}>1F</Link>
        <Link className="w-full h-full text-7xl text-right text- p-5 bg-orange-400 text-white" to={"/2f"}>2F</Link>
        <Link className="w-full h-full text-7xl text-right text- p-5 bg-lime-800 text-white" to={"/3f"}>3F</Link>
      </aside>
      <Outlet className="w-[80%] h-full" />
    </div>
  );
}