import axios from "../utils/axios"
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const Context = (props) => {
    const [products, setProducts] = useState(null)

    const getProducts = async () => {
        try {
            const {data} = await axios("/products")
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.error("error")
        }
    }

    console.log(products) // product added 20 -> 21 -> 22 -> 23..

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;