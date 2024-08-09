import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleApiProvider, useGoogleApi } from 'react-gapi'

export function MyDriveComponent() {
  const gapi = useGoogleApi({
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    ],
    scopes: [
      'https://www.googleapis.com/auth/drive.metadata.readonly',
    ],
  })

  if (!gapi) {
    return <div>Some loading screen</div>
  }

}

function MyAuthComponent() {
  // const gapi = useGoogleApi({
  //   scopes: [
  //     'profile',
  //   ],
  // })

  // const auth = gapi?.auth2.getAuthInstance()

  // return (<div>
  //   {
  //   !auth
  //     ? <span>Loading...</span>
  //     : auth?.isSignedIn.get()
  //       ? `Logged in as "${auth.currentUser.get().getBasicProfile().getName()}"`
  //       : <button onClick={() => auth.signIn()}>Login</button>
  // }
  // </div>
  // )
  return (<>asd</>)
}

function App() {
  return(
    <GoogleApiProvider clientId="1001741412344-eeepn65sdk8pm8e3ban5ebsl3ul22ne7.apps.googleusercontent.com">
      <MyAuthComponent/>
      {/* <MyDriveComponent/> */}
    </GoogleApiProvider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
