import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-[70%] h-full justify-between items-center flex m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[50%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content flex flex-col w-[40%] gap-3">
        <h1 className="text-3xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-500">men's clothing</h3>
        <h2 className="text-red-300">Price: ₹ 109.95</h2>
        <p className="">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="mt-4">
          <Link className="py-3 px-5 border rounded border-blue-200 text-blue-300 mr-5">
            Edit
          </Link>
          <Link className="py-3 px-5 border rounded border-red-200 text-red-300">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
