import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ( { product } ) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia 
                classsName={classes.media}
                image={product.image} 
                title={product.title}
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                <Typography variant="body2" color="textSecondary" component='p'>{product.desciption}</Typography>
            </CardContent>
        </CardActionArea>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-lable="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
