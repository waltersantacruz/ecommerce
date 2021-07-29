import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart, CartContextProvider } from './components'

const App = () => {

    const [productos, setProductos] = useState([]);

    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const prods = await data.json()
        setProductos(prods) 
    } 

    useEffect(() =>{
        fetchProducts();
    },[])

    return (
        <CartContextProvider>
            <Navbar />
            <div id="products"> <Products products={productos}/> </div>
            <div id="cart" > <Cart />  </div> 
        </CartContextProvider>
    )
}


export default App
