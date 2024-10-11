import React, { useState } from "react";

function Create() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form className="flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className="mb-5 w-1/2 text-2xl font-semibold">Add New Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="product description"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <div className="w-1/2">
        <button className="py-3 px-5 border mt-3 rounded border-blue-300 text-blue-400 bg-blue-100">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
