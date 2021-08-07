import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles.js'
import './styles.css'


const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return( 
        <main className={classes.content}> 
        <div className='titulo'>
            <h1>Productos</h1>
        </div>
            <div className={classes.toolbar}/>
            <Grid container className={classes.grid} spacing={4} justifyContent="center" >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.item} />
                        <Product product={product} onAddToCart={onAddToCart} className={classes.producto}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;