import React, { useState, useEffect }from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/logo.jpg'
import useStyles from './styles.js'
import { Link } from 'react-scroll'

const Navbar = ({cartItems}) => {
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

    return (
        <>
            <AppBar position="fixed" className={mobileView ? classes.appBarMobile : classes.appBar} color="inherit">
            <Toolbar>
                    <Link activeClass="active" to="products" spy={true} smooth={true}>
                        
                            {mobileView ? 
                            <Typography variant="h3" className={classes.title} color="inherit">
                                <img src={logo} alt="ecommerce" className={ classes.imageMobile }/>
                            </Typography>
                            :
                            <Typography variant="h3" className={classes.title} color="inherit">
                                <img src={logo} alt="ecommerce" className={ classes.image }/>
                                Ecommerce Practice
                            </Typography>
                            }

                    </Link>

                    <div className={classes.grow} />

                    <div className={classes.button}>
                        <Link activeClass="active" to="cart" spy={true} smooth={true}>
                        <IconButton aria-label="Show car items" color="inherit">
                            
                                <Badge badgeContent={cartItems} color="secondary" >
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
