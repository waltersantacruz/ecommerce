import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product'
import useStyles from './styles.js'


const Products = ({products}) => {
    const classes = useStyles();
    return( 
        <main className={classes.content}> 
            <div classname={classes.toolbar}/>
            <Grid container spacing={4} justify="center" >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.item} />
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;