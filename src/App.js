import React, { useState, useEffect } from 'react'

import { Products, Navbar, Cart } from './components'
import useStyles from './styles'



const App = () => {
    const classes = useStyles()
    const [productos, setProductos] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const prods = await data.json()
        setProductos(prods) 
    } 

    const onAddToCart = (producto) => {
        setCartItems([...cartItems, producto])
    }
    useEffect(() =>{
        fetchProducts();
    },[])

    console.log(cartItems)

    return (
        <div>
            <Navbar cartItems={cartItems.length}/>      
            <Products products = {productos} onAddToCart={onAddToCart}/>
            <div id="cart">
                <Cart cartItems={cartItems}/>    
            </div>
                            
        </div>
    )
}

    
    


export default App
