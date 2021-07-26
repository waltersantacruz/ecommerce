import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product'
import jacket from '../../assets/jacket.jpg'
import shoe from '../../assets/shoe.jpg'
import useStyles from './styles.js'

/*const products = [
    { id: 1, name:'Shoes', description: 'Running Shoes', price: '$300', image: {shoe}},
    { id: 2, name:'Jacket', description: 'Jacket', price: '$120', image: {jacket}}
]*/

const Products = ({products}) => {
    const classes = useStyles();
    return( 
        <main className={classes.content}> 
            <div classname={classes.toolbar}/>
            <Grid containter spacing={4} justify="center" >
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