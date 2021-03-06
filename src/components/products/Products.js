import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product'
import useStyles from './styles.js'


const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return( 
        <main className={classes.content}> 
            <Grid container spacing={4} justifyContent='center'>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2} className={classes.grid}>
                        <div className={classes.item} />
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;