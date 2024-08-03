import React from 'react';

import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export default function Footer(){
    return (
        <Container maxWidth="lg">
            <Grid container direction="row" justifyContent="center" >
                <Divider style={{ width: '100%', marginTop: '0.5rem' }} />
                <Grid item color="text.secondary">
                    <Typography variant="caption">
                        Dedicated to my family and to the Latvians in Brazil
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}