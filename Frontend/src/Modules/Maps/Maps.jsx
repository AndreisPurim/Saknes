import React, { Fragment, Component } from 'react'
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data';


import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const icon = L.icon({ 
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow,
    iconSize: [35, 46],
    iconAnchor: [17, 46]
});


const MarkerPopup = (props) => {
  const { name } = props.data;
  return  (
  	<Popup>
  		<div className='poup-text'>{name}</div>
  	</Popup>);
};

const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={icon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <Fragment>{markers}</Fragment>
};

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -28.308377, lng: -49.327237 },
      zoom: 4,
    }
  }
  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom} style={{ width: "50rem", height: "calc(100vh - 4rem)", margin:"auto"}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
        <VenueMarkers venues={ data.venues }/>
      </MapContainer>
    );
  }
}
  
export default function Map(){
    return(
        <div style={{margin:"auto"}}>
            <MapView />
        </div>
    )
}