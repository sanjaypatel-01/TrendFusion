import React, { useContext } from "react";
import { ProductContext } from "../utils/context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []); // cv - current value
  console.log(distinct_category);
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);

  // To make colour unique of categories
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, 
    ${(Math.random() * 255).toFixed()}, 
    ${(Math.random() * 255).toFixed()}, 
     0.6)`;
  };
  console.log(color());

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

      <div className="w-[80%] ">
        {distinct_category.map((c, i) => {
          return (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="mb-3 flex items-center"
            >
              <span
                style={{ backgroundColor: color() }}
                className="w-[15px] h-[15px] rounded-full  mr-2"
              ></span>
              {c}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
