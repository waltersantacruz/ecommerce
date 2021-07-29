import React, { useContext } from 'react'
import { CartContext } from '../../context/carritoContext';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ( { product } ) => {
    const classes = useStyles();
    const { onAddToCart } = useContext(CartContext)
    
    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia 
                className={classes.media}
                image={product.image}
                title={product.title}
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h2" component="h2">
                        ${product.price}
                    </Typography>
                <Typography variant="body2" color="textSecondary" component='p'>{product.description}</Typography>
            </CardContent>
        </CardActionArea>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product)}>
                    <AddShoppingCart/>
                    Add to Cart    
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
