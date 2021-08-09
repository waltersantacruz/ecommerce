import React, { useState} from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ( { product, onAddToCart} ) => {
    const classes = useStyles();
    const [onHover, setOnHover] = useState(false)

    return (
        <Card className={onHover ? classes.rootClicked : classes.root} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} elevation={5}>
            {onHover 
            ? 
            //carta cuando se hizo clic
            <CardActionArea className={classes.actionAreaClicked}>
                <CardMedia 
                    className={classes.mediaClicked}
                    image={product.image}
                    title={product.title}
                />
                <CardContent className={classes.cardContent}>
                        <Typography className={classes.title}>
                            {product.title}
                        </Typography>

                         
                </CardContent>
            </CardActionArea>

            :
            //carta sin clic
            <CardActionArea className={classes.actionArea}>
            <CardMedia 
                    className={classes.mediaNotClicked}
                    image={product.image}
                    title={product.title}
            /></CardActionArea> }

            {/*boton add to cart*/}
            <CardActions className={classes.botonHolder} >
                {onHover && 
                <div>
                <IconButton className={classes.boton} aria-label="Add to Cart" onClick={() => onAddToCart(product)}>
                    <AddShoppingCart />
                    Add   
                </IconButton>

                <Typography className={classes.price}>
                            ${product.price}
                </Typography>
                </div>
                
                 }  
            </CardActions> 
        </Card>
    )
}

export default Product
