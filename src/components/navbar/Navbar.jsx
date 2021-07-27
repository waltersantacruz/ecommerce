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
                   <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="ecommerce" height="50px" className={classes.image}/>
                    Ecommerce
                   </Typography>
                   <div className={classes.grow} />
                   <div className={classes.button}>
                       <IconButton aria-label="Show car items" color="inherit">
                           <Link activeClass="active" to="cart" spy={true} smooth={true}>
                            <Badge badgeContent={cartItems} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </Link>
                       </IconButton>
                   </div>
               </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
