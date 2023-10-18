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

const information = require('./Data/information.json') 

// #E4E4DE, sophisticated sage #C4C5BA, timeless noir #1B1B1B, muted moss #595f39

const getComplementaryColor = (color = "") => {
  const colorPart = color.slice(1);
  const ind = parseInt(colorPart, 16);
  let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16);
  while (iter.length < colorPart.length) {
      iter = "0" + iter;
  }
  return "#" + iter;
};

const color = "#595f39";

function App(){
  const [lightMode, setLightMode] = React.useState(
    (useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light")
  );
  const theme = React.useMemo(
    () =>
        createTheme({
            palette: {
                primary: {main: color},
                secondary: {main: getComplementaryColor(color)},
                mode: lightMode,
            },
            typography: {
                fontFamily: "sans-serif",
            },
        }),
    [color, lightMode]
  );
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
          <Routes>
              {information.families.map(family_id => 
                <Route key={family_id} path={"/family/"+family_id} element={<FamilyTree family_id={family_id}/>} />
              )}
              <Route path="/" element={<Homepage />}/>
          </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

