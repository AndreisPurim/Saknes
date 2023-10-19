import React from 'react';

import Container from "@mui/material/Container";

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';


import { Link } from 'react-router-dom'


const social_medial = [
    {icon: <InstagramIcon fontSize="large"/>, link: "https://www.instagram.com/andreis.purim/"},
    {icon: <FacebookIcon fontSize="large"/>, link: "https://www.facebook.com/andreis.purim"},
    {icon: <EmailIcon fontSize="large"/>, link: "mailto:andreispurim@gmail.com"},
    {icon: <WhatsAppIcon fontSize="large"/>, link: "https://api.whatsapp.com/send?phone=5541992903550&text=%5BEnter%20your%20name%20and%20your%20reason%20for%20contacting%5D"},
    {icon: <LinkedInIcon fontSize="large"/>, link: "https://www.linkedin.com/in/andreispurim/"},
    {icon: <HomeIcon fontSize="large"/>, link: "https://andreis.lv"},
    {icon: <GitHubIcon fontSize="large"/>, link: "https://github.com/AndreisPurim"}
]


const video = require('./background_light.mp4')
const links = ["families", "biographies", "maps", "events", "documents", "search"]
const introduction = [
    {flag: "🇧🇷", text: [
        <span><i>Saknes</i> (em leto: Raízes) é um <b>repositório online e gratuito</b> de informações sobre a comunidade <b>leto-brasileira</b>. Funciona como uma enciclopédia colaborativa, semelhante à Wikipédia, e tem como objetivo não apenas auxiliar aqueles que buscam informações sobre suas origens e antepassados, mas também preservar a rica história e cultura dos letos no Brasil.</span>,
        <span>Este projeto é uma iniciativa pessoal, desenvolvida integralmente de <b>forma voluntária no meu tempo livre</b>. Toda e qualquer ajuda é extremamente valiosa, seja divulgando o projeto ou contribuindo com informações adicionais. Se você possui dados sobre os letos no Brasil, como histórias de família, nomes, datas ou qualquer outro conteúdo relevante, convidamos você a compartilhá-los conosco. Sua colaboração é essencial para enriquecer nosso repositório e garantir que a <b>história da comunidade leto no Brasil seja preservada para as gerações futuras.</b></span>
    ]},
    {flag: "🇬🇧", text: [
        <span><i>Saknes</i> (in Latvian: Roots) is an <b>online and free repository</b> of information about the <b>Latvian-Brazilian community</b>. It functions as a collaborative encyclopedia, similar to Wikipedia, with the aim of not only assisting those seeking information about their origins and ancestors but also preserving the rich history and culture of Latvians in Brazil.</span>,
        <span>This project is a personal initiative, developed entirely <b>voluntarily in my spare time</b>. Any and all help is extremely valuable, whether it's promoting the project or contributing additional information. If you have data related to Latvians in Brazil, such as family stories, names, dates, or any other relevant content, we invite you to share it with us. Your collaboration is essential to enrich our repository and ensure that the <b>history of the Latvian community in Brazil is preserved for future generations.</b></span>
    ]},
    {flag: "🇱🇻", text: [
        <span><i>Saknes</i> ir bezmaksas tiešsaistes krātuve ar informāciju par <b>latviešu-braziliešu kopienu</b>. Tā darbojas kā sadarbības enciklopēdija, līdzīgi kā Wikipedia, ar mērķi ne tikai palīdzēt tiem, kuri meklē informāciju par savām saknēm un priekštečiem, bet arī saglabāt bagāto latviešu vēstures un kultūras mantojumu Brazīlijā.</span>,
        <span>Šis projekts ir personīga iniciatīva, ko veidoju pilnīgi <b>brīvprātīgi savā brīvajā laikā</b>. Jebkāda palīdzība ir ļoti vērtīga, vai nu jūs reklamējat projektu vai sniedzat papildu informāciju. Ja jums ir dati par latviešiem Brazīlijā, piemēram, ģimenes stāsti, vārdi, datumi vai jebkāda cita saistīta informācija, mēs aicinām jūs to kopīgot ar mums. Jūsu sadarbība ir būtiska, lai bagātinātu mūsu krātuvi un nodrošinātu, ka <b>latviešu kopienas vēsture Brazīlijā tiek saglabāta nākamajām paaudzēm.</b></span>
    ]}
]
const information = require('../../Data/information.json')
const random_quote = information.quotes[Math.floor(Math.random() * information.quotes.length)];


export default function Homepage(){
    return(
        <Container maxWidth="lg">
            <CardMedia component="video" src={video} autoPlay loop/>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item xs={12}/>
                {links.map(link =>
                    <Grid item key={link}>
                        <Button variant="outlined" size="large" disabled>
                            {link}
                        </Button>
                    </Grid>
                )}
                <Grid item xs={12}/>
                <Grid item>
                    <Button variant="contained" size="large" component={Link} to={'/submission'}>
                        Submit information
                    </Button>
                </Grid>
                <Grid item xs={12}/>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <Typography variant="h5" style={{color:"#595f39"}}><b>Quote of the day</b></Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item color="text.secondary">
                    <Typography variant="body1"><i>"{random_quote.text}"</i></Typography>
                    <Typography variant="caption"> - {random_quote.author}</Typography>
                </Grid>
                <Grid item xs={12}/>
                {introduction.map(int =>
                    <React.Fragment key={int.flag}>
                        <Grid item>
                            <Typography variant="h5" style={{padding:'10px'}}>
                                {int.flag}
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item style={{textIndent: '2rem', textAlign: 'justify'}} xs={11}>
                            {int.text.map((t,i) =>
                                <Typography key={i} variant="body2" gutterBottom>
                                    {t}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12}/>
                    </React.Fragment>
                )}
                <Grid item xs={12}/>
                <Grid item xs={11}>
                    <Paper elevation={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{padding:'0 1rem 0.5rem 1rem'}}>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <Typography variant="h5" style={{color:"#595f39"}}><b>About the Author</b></Typography>
                                <Divider/>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <img style={{width: '100%', borderRadius:'20px'}} alt="Andreis" src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t39.30808-6/273646216_1933802966806673_675703403140099491_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpJ1EEjk43S8Oh95Q3nzLAuPOeHt2K3Y64854e3YrdjiDJqBKxK4UDbgsCLkRMATgBe0Ru_ZMIl16QuylxYPOt&_nc_ohc=XB3zV2JEABoAX9NWppz&_nc_oc=AQmDFPk7KQ7Q8D8NMNGK7btUncHbcavewvZe95q5qBqYpTofi6so4znn-FCLKRZBNKk&_nc_ht=scontent.fcpq4-1.fna&oh=00_AfBCIgMEXAvoqUl-oX85O60XoO6tXNZq121eOCJvoz7MdA&oe=65357DA8" />
                            </Grid>
                            <Grid item md={10} xs={12} style={{textIndent: '2rem', textAlign: 'justify'}}>
                                <Typography variant="body2">I'm Andreis Purim/Andrejs Purinš - and as you can probably guess - I'm a latvian-brazilian Computer Engineer (my main focus is A.I. and Cybersecurity). Since 2014 I've been <s>overworking myself to an early grave</s> volunteering in the Brazilian Latvian Culture Assocation, the Honorary Consulate of Latvia in Brazil, PBLA and other organizations preserve latvianness across the world.</Typography>
                                <Typography variant="body2">Saknes is a long dream of mine because I've spent my teenage years working togheter with my uncle Vigants Arvids Puriņš - our equivalent of a Latvian-Brazilian <i>Krišjānis Barons</i>, who drove around miles and miles of Brazil collecting documents, testimonials and information about the Latvians in Brazil. Some of his work is now part of the Latvian National Archive. However, even what we achieved is still a fraction of the total microcosms of the Latvians here - even worse, even with his tireless work, it is still hard to research these documents.</Typography>
                                <Typography variant="body2">That's where Saknes comes in: a way to preverse - as long as possible - all this information that he and all others managed to collect. I hope all these stories captivate you as they once captivated me.</Typography>
                            </Grid>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <Divider/>
                            </Grid>
                            {social_medial.map(item =>
                                <Grid item>
                                    <IconButton target="_blank" href={item.link}>
                                        {item.icon}
                                    </IconButton>
                                </Grid>
                                )}
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}/>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <Typography variant="h5" style={{color:"#595f39"}}><b>Supporters / How to Help</b></Typography>
                    <Typography variant="body2">
                        If you have any information about any Latvian-Brazilian (any date, person, place, etc...), you can help by submitting this data to the database. You can also help by sharing this project with friends, family or other people or helping in technical aspects (submitting bugs, etc...).
                    </Typography>
                    <Typography variant="caption">no one yet :(</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}