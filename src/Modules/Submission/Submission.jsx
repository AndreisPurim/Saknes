import React from 'react';

import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default function Submission({lightMode, setLightMode, alert, setAlert}){
    const [submission, setSubmission] = React.useState({name: "", email: "", text: ""})
    function handleChange(event, field){
        setSubmission({...submission, [field]: event.target.value})
    }
    const onSubmit = () => {
        var uri = "mailto:andreispurim@gmail.com?subject=";
        uri += encodeURIComponent(submission.name);
        uri += "&body=";
        uri += encodeURIComponent(submission.text);
        window.location.href = uri;
        setAlert({open: true, text: "If the submission button creates an empty body, then submit directly via email and let me know it didn't work.", severity: "warning", hide: false})
    }
    return(
        <Container maxWidth="lg">
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Typography variant="h4" style={{color:"#595f39"}}><b>Submit new data</b></Typography>
                    <Typography variant="body2" >
                        Send directly to <i>andreispurim@gmail.com</i> or use the system below.
                    </Typography>
                </Grid>
                <Grid item md={3} xs={12}  style={{textIndent: '2rem', textAlign: 'justify'}}>
                    <Typography variant="body2" >
                        Welcome to the submission system of <i>Saknes</i>! Please, enter the information you want to submit to our database on the fields mentioned.
                    </Typography>
                    <Typography variant="body2" >
                        Remember, this is a voluntary, free and open-source project and all submissions will be analyzed by me (Andreis), so try to write the most complete submission possible, and I'll try to get back as soon as I can.
                    </Typography>
                    <Typography variant="body2" >
                        <b>Document/PDF submissions:</b> if you have a document, or perhaps your submission is very large and you'd prefer to edit it elsewhere (Word, Google Docs) and submit a file. You can send simply send a small text via the submission button and then I'll arrange a way to store this file. 
                    </Typography>
                </Grid>
                <Grid item md={9} xs={12} container direction="row" justifyContent="space-between" alignItems="stretch" spacing={1}>
                    <Grid item xs={6}>
                        <TextField label="Your name" fullWidth value={submission.name} onChange={e => handleChange(e, "name")} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Your email" fullWidth value={submission.email} onChange={e => handleChange(e, "email")} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Detailed Submission"
                            multiline
                            fullWidth
                            rows={9}
                            value={submission.text}
                            onChange={e => handleChange(e, "text")}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs />
                    <Grid item><Button variant="contained" onClick={onSubmit} endIcon={<ForwardToInboxIcon />}>Submit via email</Button></Grid>
                </Grid>
                <Grid item xs={12} style={{textIndent: '2rem', textAlign: 'justify'}}>
                    <Typography variant="body2">
                        Currently, I don't have the money and time to keep a backend server working (you can help me fix it by supporting the project!), so the submission system is basically an email generator. However, the plan is that in the future it might be a fully integrated document uploader/family tree maker, etc... so, help the project grow!
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{textIndent: '2rem', textAlign: 'justify'}}>
                    <Typography variant="body2" >
                        <b>Disclaimer¹:</b> Information submitted will be considered public knowledge/relevant and belonging to the latvian-brazilian community. 
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}