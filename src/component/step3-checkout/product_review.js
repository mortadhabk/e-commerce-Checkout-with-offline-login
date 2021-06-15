
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    }
}));

const imageStyle = {
    backgroundSize: 'contain',
};



function ProductReview(props) {
    console.log(props.items);
    const classes = useStyles();
    return (
        <>
            {
                props.items.map(el => (
                    <Card className={classes.root} mt={2}>
                        <CardMedia
                            className={classes.cover}
                            image={el.image.url}
                            style={imageStyle}
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {el.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {el.quantity + " X " + el.price_range.minimum_price.regular_price.value + " " +el.price_range.minimum_price.regular_price.currency}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                ))
            }
        </>
    );
}

export default ProductReview
