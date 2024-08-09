import React from 'react';
import ReactDOM from 'react-dom/client';


import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

import UploadDropZone from "@rpldy/upload-drop-zone";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import { visuallyHidden } from '@mui/utils';

import { asUploadButton } from "@rpldy/upload-button";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const MyPreview = ({ type, url, id, name, isFallback, indexString, startId }) => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(
      <TableRow key={name}>
      <TableCell>
        <img src={url} style={{height: 50, objectFit: "cover"}}/>
      </TableCell>
      <TableCell>{indexString + (parseInt(id.substring(id.lastIndexOf('-')+1))+startId)}</TableCell>
      <TableCell>
        <FormControl fullWidth variant="standard">
          <InputLabel>Period</InputLabel>
          <Select
            value={age}
            label="Period"
            onChange={handleChange}
          >
            <MenuItem value={10}>Trimdas Laika</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell><TextField variant="standard" label="Title"/></TableCell>
      <TableCell><TextField variant="standard" label="Year"/></TableCell>
      <TableCell><TextField variant="standard" label="City"/></TableCell>
      <TableCell><TextField variant="standard" label="Country"/></TableCell>
      <TableCell><TextField variant="standard" label="Author"/></TableCell>
      <TableCell><TextField variant="standard" label="Description"/></TableCell>
      <TableCell>1</TableCell>
      <TableCell>{name.substring(name.lastIndexOf('.')+1)}</TableCell>
    </TableRow>
  )
};

// Index
// Title
// Time period
// Year
// City
// Country
// Author
// Size
// File
// Format
// Description

const MuiUploadButton = asUploadButton(React.forwardRef(
  (props, ref) =>
    <div><Button variant="outlined" ref={ref}>Primary</Button></div>
    
));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const previewMethodsRef = React.useRef();
  const [previews, setPreviews] = React.useState([]);
  const onPreviewsChanged = React.useCallback((previews) => {
        // setPreviews(previews);
  }, []);
  return(
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container maxWidth="xl" style={{paddingTop: '1rem'}}>
      <Uploady destination={{ url: "my-server.com/upload" }} accept="image/*">
        <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={1}>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Typography variant="h3" gutterBottom>
              PBLA file formatter
            </Typography>
          </Grid>
          <Grid item>
            <Paper>
              <TableContainer>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>File</TableCell>
                      <TableCell>Index</TableCell>
                      <TableCell>Time Period</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Year</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Country</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell>Format</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <UploadPreview
                        rememberPreviousBatches
                        previewMethodsRef={previewMethodsRef}
                        onPreviewsChanged={onPreviewsChanged}
                        PreviewComponent={MyPreview}
                        previewComponentProps={{
                        indexString: "KURI_F_", 
                        startId: 37
                    }} />
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          {/* <MuiUploadButton /> */}
          <UploadButton />
          </Grid>
      </Grid>
    </Uploady>
    </Container> 
    </ThemeProvider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
