import React from 'react';
import ReactDOM from 'react-dom/client';

import DriveUploady from "drive-uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";

// function App(){
//   return (
//     <DriveUploady
//       clientId="1001741412344-eeepn65sdk8pm8e3ban5ebsl3ul22ne7.apps.googleusercontent.com"
//       scope="https://www.googleapis.com/auth/drive.file"
//     >
//       <UploadButton/>
//     </DriveUploady>
//   );
// }


// import useDrivePicker from 'react-google-drive-picker'

// function App() {
//   const [openPicker, authResponse] = useDrivePicker();  
//   // const customViewsArray = [new google.picker.DocsView()]; // custom view
//   const handleOpenPicker = () => {
//     openPicker({
//       clientId: "1001741412344-eeepn65sdk8pm8e3ban5ebsl3ul22ne7.apps.googleusercontent.com",
//       developerKey: "AIzaSyDT2WyelB32Pon8baKPRvZT0LU9sYa25xA",
//       viewId: "DOCS",
//       // token: token, // pass oauth token in case you already have one
//       showUploadView: true,
//       showUploadFolders: true,
//       supportDrives: true,
//       multiselect: true,
//       // customViews: customViewsArray, // custom view
//       callbackFunction: (data) => {
//         if (data.action === 'cancel') {
//           console.log('User clicked cancel/close button')
//         }
//         console.log(data)
//       },
//     })
//   }
//   return(
//     <div>
//       <button onClick={() => handleOpenPicker()}>Open Picker</button>
//     </div>
//   )
// }

function App() {

}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
