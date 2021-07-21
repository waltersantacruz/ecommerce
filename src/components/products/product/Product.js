import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ( {product} ) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia classsName={classes.media} image ='' title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography gutterBottom variant="h5" >
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.desciption}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-lable="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
