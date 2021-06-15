import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
}));

function Coupon() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <TextField id="standard-basic" label="Coupon" />
                </Grid>
                <Grid item xs={3}>
                    <Box pt={2}>
                        <Button variant="outlined" color="primary" size="small">
                            <SearchIcon/>
                    </Button>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    {/* remise avec coupon */}
                </Grid>
            </Grid>
        </form>
    );
}

export default Coupon
