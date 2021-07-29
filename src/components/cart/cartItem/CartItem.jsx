import React, { useContext }from 'react';
import { CartContext } from '../../context/carritoContext.jsx'
import { Container, Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles.js'

const CartItem = ({ item  }) => {
    const classes = useStyles();
    const { removeFromCart } = useContext(CartContext)

    return (
        <Card>
            <CardMedia image={item.image} alt='item.title' className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="overline">{item.title}</Typography>
                <Typography variant="h5">${item.price}</Typography>
            </CardContent>    
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button className={classes.removeButton} variant="contained" color="secondary" type="button" onClick={() => removeFromCart(item.index)}>Remove</Button>
                </div> 
            </CardActions>
        </Card>
    )
    
}

export default CartItem
