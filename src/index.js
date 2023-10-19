import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";

import FamilyTree from './Modules/Families/Families'
import Homepage from './Modules/Homepage/Homepage'
import Submission from './Modules/Submission/Submission'
import Maps from './Modules/Maps/Maps'

import Navbar from './Modules/Components/Navbar'
import Footer from './Modules/Components/Footer'


const information = require('./Data/information.json') 

// #E4E4DE, sophisticated sage #C4C5BA, timeless noir #1B1B1B, muted moss #595f39


function App(){
	const [lightMode, setLightMode] = React.useState(useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light");
	const [alert, setAlert] = React.useState({open: false, text: "", severity: "success", hide: true});
	const theme = React.useMemo(() => createTheme({
		palette: {
			primary: {main: "#595f39"},
			secondary: {main: "#a6a0c6"},
			mode: lightMode,
		},
		typography: {
			fontFamily: "sans-serif",
		},
	}),[lightMode]);
	const sendControl = {lightMode, setLightMode, alert, setAlert}
	return(
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter>
				<Navbar {...sendControl}/>
				<Routes>
					{information.families.map(family_id => 
						<Route key={family_id} path={"/families/"+family_id} element={<FamilyTree family_id={family_id}/>} />
					)}
					<Route path={"/families"} element={<FamilyTree family_id={'klavin'}/>} />
					<Route path="/maps" element={<Maps {...sendControl} />}/>
					<Route path="/submission" element={<Submission {...sendControl} />}/>
					<Route path="/" element={<Homepage />}/>
				</Routes>
				<Snackbar open={alert.open} autoHideDuration={alert.hide?1000:null} onClose={()=>setAlert({...alert, open: false})}>
					<Alert elevation={6} variant="filled" severity={alert.severity}>
						{alert.text}
					</Alert>
				</Snackbar>
			<Footer />
			</HashRouter>
		</ThemeProvider>
	)
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

