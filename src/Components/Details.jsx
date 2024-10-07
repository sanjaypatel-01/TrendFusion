import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/context";
import axios from "../utils/axios";
import Loading from "./Loading";
// import axios from "axios";

function Details() {

  // const [products] = useContext(ProductContext);

  const [product, setProducts] = useState(null)
  const { id } = useParams()
  const getsingleproduct = async () => {
    try {
      // const id = parseInt(this.props.match.params.id);
      const { data } = await axios(`/products/${id}`);
      setProducts(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  // calling getSingleProduct using useEffect

  useEffect(() => {
    getsingleproduct();
  }, [])

  return ( product ?
    <div className="w-[70%] h-full justify-between items-center flex m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[50%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content flex flex-col w-[40%] gap-3">
        <h1 className="text-3xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-500">{product.category}</h3>
        <h2 className="text-red-300">Price: {product.price}</h2>
        <p className="">
          {product.description}
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
    </div> : <Loading/>
  );
}

export default Details;
