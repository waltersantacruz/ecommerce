import React, { useState, useEffect } from 'react'


import { Products, Navbar } from './components'
const App = () => {
    const [productos, setProductos] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const prods = await data.json()
        setProductos(prods) 
    } 

    const onAddToCart = (producto,quantity) => {
        setCartItems([...cartItems, producto])
    }
    useEffect(() =>{
        fetchProducts();
    },[])

    console.log(cartItems)
    return (
        <div>
            <Navbar />
            {productos ? <Products products = {productos} onAddToCart={onAddToCart}/> : console.log("no hay nada")}
        </div>
    )
}

    
    


export default App
