import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/context";

function Home() {

  const [products] = useContext(ProductContext)

  if (!products) return <div>Loading...</div>; 
  console.log(products)

  return (
    <>
      <Nav />
      <div className="h-full w-[85%] pt-[5%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="card w-[18%] h-[30vh] mr-5 p-3 border shadow rounded flex flex-col items-center justify-center"
        >
          <div
            className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 transform hover:scale-110 transition duration-900 ease-in-out cursor-pointer"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="transform hover:scale-105 cursor-pointer">Heading</h1>
        </Link>
      </div>
    </>
  );
}

export default Home;

// overflow-x-hidden-> (hidden) -> Prevents horizontal (x-axis) scrolling, ensuring the card stays fixed and doesn't move or slide sideways

// overflow-y-auto-> (auto) -> Allows vertical (y-axis) scrolling if content exceeds the container's height
