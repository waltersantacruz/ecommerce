import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/logo.jpg'
import useStyles from './styles.js'
import { Link } from 'react-scroll'

const Navbar = ({cartItems}) => {
    const classes = useStyles();

    return (
        <>
           <AppBar position= "fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                    <Link activeClass="active" to="products" spy={true} smooth={true}>
                        <Typography variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="ecommerce" height="50px" className={classes.image}/>
                                Ecommerce Practice
                        </Typography>
                    </Link>

                   <div className={classes.grow} />

                   <div className={classes.button}>
                    <Link activeClass="active" to="cart" spy={true} smooth={true}>
                       <IconButton aria-label="Show car items" color="inherit">
                           
                            <Badge badgeContent={cartItems} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            
                       </IconButton>
                    </Link>
                   </div>

               </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
