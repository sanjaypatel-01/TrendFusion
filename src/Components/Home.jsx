import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const {search} = useLocation() // Provided by React Router Dom
  console.log(search) // We want particular word like mens clothing or jewellery
  // const category = search.split("=")[1]
  const category = decodeURIComponent(search.split("=")[1]) // To convert it in string, we have inbuilt method
  console.log(category) 

  // const [filteredProducts, setFilteredProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(null)

  // Jab category url pe category nahi  milege tb undefined ayega tb kya  krna hai
  const getproductcategory = async () => {
    try {
      const { data } = await axios(`/products/category/${category}`);
      setFilteredProducts(data)
    } catch (error) {
      console.error(error);
    }
  }

  // ab ye getproductcategory() call kb krna, jb ishki value undefined ho tb nhi krna hai
  useEffect(() => {
    if (!filteredProducts || category == "undefined") setFilteredProducts(products) 
    if(category != "undefined") getproductcategory(); // Yahn, agr category ki koi value ho tabhi call krna
  }, [category, products]) // category change krna hai toh useEffect call krna

  console.log(filteredProducts)


  // if (!products) return <div>Loading...</div>;

  console.log(products);

  return products ? (
    <>
      
      <Nav />
      <div className="h-full w-[85%] pt-[5%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((p, i) => {
          return ( 
            <Link key = {p.id}
              to={`/details/${p.id}`}
              className="card w-[18%] h-[30vh] mr-5 p-3 border shadow rounded flex flex-col items-center justify-center"
            >
              <div
                className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 transform hover:scale-110 transition duration-900 ease-in-out cursor-pointer"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="transform hover:scale-105 cursor-pointer">
                {p.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;

// overflow-x-hidden-> (hidden) -> Prevents horizontal (x-axis) scrolling, ensuring the card stays fixed and doesn't move or slide sideways

// overflow-y-auto-> (auto) -> Allows vertical (y-axis) scrolling if content exceeds the container's height

// 59:00 Loading
//1:7:00 data aa gaya h
//1:23 how to extract category word