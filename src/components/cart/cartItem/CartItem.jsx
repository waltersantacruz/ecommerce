import React from 'react';
import { Container, Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles.js'

const CartItem = ({ item, removeFromCart , qnty}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image} alt='item.title' className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">${item.price}</Typography>
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
