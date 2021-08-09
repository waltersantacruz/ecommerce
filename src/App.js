import React, { useState, useEffect } from 'react'

import { Products, Navbar, Cart} from './components'

const App = () => {
    
    const [productos, setProductos] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const prods = await data.json()
        setProductos(prods) 
    } 

    const onAddToCart = (producto) => {
        let len = cartItems.length
        cartItems.length === 0 ? producto.index = 0 : producto.index = cartItems[len-1].index+1 
        setCartItems([...cartItems, producto])
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const removeFromCart = (index) => {
        const newCart = cartItems.filter((item) => item.index !== index)
        setCartItems(newCart);
    }

    useEffect(() =>{
        fetchProducts();
    },[])


    return (
        <div>
            <Navbar cartItems={cartItems.length}/>
            <div id="products">
                <Products products={productos} onAddToCart={onAddToCart}/>
            </div>      
            <div id="cart">
                <Cart cartItems={cartItems} emptyCart={emptyCart} removeFromCart={removeFromCart}/>    
            </div>            
        </div>
    )
}


export default App
