import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import './form.css'

function FormAdress(props) {
    const { firstname, lastname, telephone, city, country_code, street, postcode } = props.info[0]
    return (
        <React.Fragment>
            <Box p={2} border={1} >
                <Grid container spacing={3} mt={2}>
                    <Grid item xs={12} className="buttonEdit">
                        <Button variant="outlined" color="primary">
                            <EditIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="outlined-read-only-input1"
                            label="Nom"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={firstname}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="outlined-read-only-input2"
                            label="Prénom"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={lastname}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-read-only-input3"
                            label="Adresse"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={street[0]}
                            className="fullwidthinput"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="outlined-read-only-input4"
                            label="Ville"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={city}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="outlined-read-only-input5"
                            label="Pays"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={country_code}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="outlined-read-only-input6"
                            label="Code Postal"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={postcode}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="outlined-read-only-input7"
                            label="Téléphone"
                            defaultValue="n'existe pas"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            value={telephone}
                        />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default FormAdress
