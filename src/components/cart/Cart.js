import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles.js'

import CartItem from './cartItem/CartItem.jsx'

const Cart = ({ cartItems }) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="overline"> You have no items in the cart</Typography>
        
    );

    const calcularSubtotal = (cartItems) => {
        let cuenta = 0
        cartItems.map((item)=>(
            cuenta = cuenta + item.price
        ))
        return(
        <h1>{cuenta}</h1>
        )   
    };

    const inCart = (cartItems, id) => {
        const exists = false
        cartItems.map((item)=>(
            item.id === id ? exists = true : exists
        ))    
        return exists
    }

    //cuenta la cantidad de items del carrito
    const cantidadItem = (cartItems, id) => {
        let qnty = 0;
        cartItems.map((item)=>(
            item.id === id ? qnty=qnty+1 : qnty
        ))
        return qnty
    }

    //dibuja las tarjetas del carrito
    const FilledCart = () => (
        <div className={classes.content}>
            <Grid container spacing={3}>
                {cartItems.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <div>
                            <CartItem item={item} qnty={cantidadItem(cartItems, item.id)}/>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className ={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {calcularSubtotal(cartItems)}
                </Typography>
                    <div>
                       <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button> 
                       <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button> 
                    </div>
            </div>
        </div>
    );


    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className= { classes.title } variant="h3" gutterBottom>Your shopping cart</Typography>
            { !cartItems.length ? <EmptyCart /> : <FilledCart/>}
        </Container>
    )
}

export default Cart
