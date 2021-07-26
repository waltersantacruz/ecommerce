import React, { useState, useEffect } from 'react'


import { Products, Navbar } from './components'
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

    console.log(productos)

    return (
        <div>
            <Navbar />
            {productos ? <Products products = {productos}/> : console.log("no hay nada")}
        </div>
    )
}

    
    


export default App
