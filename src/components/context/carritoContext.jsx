import React , { useState, createContext } from 'react'

export const CartContext = createContext()

const CartContextProvider = props => {
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = producto => {
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

    return (
        <CartContext.Provider value={{ cartItems, onAddToCart, emptyCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


