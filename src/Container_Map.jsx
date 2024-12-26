import React from 'react'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const Container_Map = ({markers, blackIcon, redIcon1, redIcon2, center}) => {

    const condoLocations = markers.filter(marker => marker.type === "condo").map(marker=>marker.geocode);
    const duplexLocations = markers.filter(marker => marker.type === "duplex").map(marker=>marker.geocode);
    const triplexLocations = markers.filter(marker => marker.type === "triplex").map(marker=>marker.geocode);
    
  return (
            <MapContainer center={center}
                          zoom={13}
                          style = {{width: "100%", height: "100%"}}>
                <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map(marker =>(
                <Marker 
                position={marker.geocode} 
                icon={marker.type !== "triplex"? (marker.type !== "duplex" ? blackIcon : redIcon2): redIcon1}>
                <Popup><p><em>{marker.description}</em></p></Popup>
                </Marker> 
                ))}   
                <Polyline positions={condoLocations} color="black" weight={3} opacity={0.7}/>    
                <Polyline positions={duplexLocations} color="red" weight={3} opacity={0.7}/>    
                <Polyline positions={triplexLocations} color="green" weight={3} opacity={0.7}/>    
            </MapContainer>    

  )
}

export default Container_Map