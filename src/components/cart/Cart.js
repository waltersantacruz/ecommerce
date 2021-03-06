import React, { useState, useEffect} from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles.js'
import { Link } from 'react-scroll'


import CartItem from './cartItem/CartItem.jsx'

const Cart = ({ cartItems, removeFromCart, emptyCart}) => {
    const classes = useStyles();
    const [mobileView, setMobileView] = useState(false)

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false)
        }
        setResponsiveness()

        window.addEventListener("resize", () => setResponsiveness())

        return () => {
        window.removeEventListener("resize", () => setResponsiveness())
        }     
    },[])
    
    const calcularSubtotal = (cartItems) => {
        let cuenta = 0
        cartItems.map((item)=>(
            cuenta = cuenta + item.price
        ))
        cuenta = '$' + cuenta.toFixed(2) 
        return(
        <h1>{cuenta}</h1>
        )   
    };

    //cuenta la cantidad de items del carrito
    const cantidadItem = (cartItems, id) => {
        let qnty = 0;
        cartItems.map((item)=>(
            item.id === id ? qnty=qnty+1 : qnty
        ))
        return qnty
    }

    //empty carrito 
    const EmptyCart = () => (
        <div className={classes.emptyContent}>
            <Typography variant="overline" > You have no items in the cart</Typography> 
            <Link activeClass="active" to="products" spy={true} smooth={true} >
                <Button className={classes.buttonStartBuying}>
                    Start Buying!
                </Button>   
            </Link> 
        </div>
    );

    //dibuja las tarjetas del carrito
    const FilledCart = () => (
        <div className={classes.content}>
            <Grid container spacing={3}>
                {cartItems.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <div>
                            <CartItem item={item} qnty={cantidadItem(cartItems, item.id)} removeFromCart={removeFromCart}/>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className ={mobileView ? classes.cardDetailsMobile : classes.cardDetails}>
                <div className={mobileView ? classes.subtotalContainerMobile : classes.subtotalContainer}>
                    <Typography variant='overline' className={mobileView ? classes.subtotalMobile : classes.subtotal}>
                        Subtotal:
                    </Typography>
                    <div className={mobileView ? classes.totalMobile : classes.total}>
                        {calcularSubtotal(cartItems)}
                    </div>
                </div>

                <div className={mobileView ? classes.buttonsMobile : classes.buttons}>
                    <Button className={classes.emptyButton} size="medium" type="button" variant="contained" color="primary" onClick={() => emptyCart()}>Empty Cart</Button> 
                    <Link activeClass="active" to="products" spy={true} smooth={true} >
                        <Button className={classes.keepBuying}>
                            Keep Buying
                        </Button>
                        <i className='fa fa-arrow-up hvr-icon'></i>   
                    </Link>  
                </div>
            </div>
        </div>
    );



    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className= { classes.title } variant="h3" gutterBottom>Your shopping cart</Typography>
            { !cartItems.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
