import React from "react";

function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col pt-5 items-center">
      <a
        href="/create"
        className="py-3 px-5 border rounded border-blue-200 text-blue-300"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <ul className="w-[80%] ">
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full bg-blue-100 mr-2"></span>
          Category 1
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full bg-red-100 mr-2"></span>
          Category 2
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full bg-green-100 mr-2"></span>
          Category 3
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full bg-blue-100 mr-2"></span>
          Category 4
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
