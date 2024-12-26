import React from 'react'
import "./style.css";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

import L from 'leaflet';
import blackImage from "./assets/icon_map2.png";
import redImage1 from "./assets/icon_red1.png";
import redImage2 from "./assets/icon_red2.png";

const App = () => {

  const center = [45.570947929661905, -73.53872218835589]

  const markers = [
    {
      id: 1,
      geocode: [45.612825496481726, -73.52397166092717],
      description: "719 000$ - 1 x 3 ½, 2 x 5 ½ - year 1977",
      type: "triplex"
    },
    {
      id: 2,
      geocode: [45.576303921012894, -73.55309791859972],
      description: "774 900$ - 1 x 3 ½, 1 x 5 ½, 1 x 6 ½ - year 1969",
      type: "triplex"
    },
    {
      id: 3,
      geocode: [45.60911828196557, -73.5149813511473],
      description: "679 000$ - 1 x 3 ½, 2 x 4 ½ - year 1959",
      type: "triplex"
    },
    {
      id: 4, 
      geocode: [45.58197337845853, -73.53100200325837],
      description: "748 000$ - 1 x 3 ½, 2 x 5 ½ - year 1958",
      type: "triplex"
    },
    {
      id: 5,
      geocode: [45.61185829848781, -73.52250364743297],
      description: "569 000$ - 2 x 4 ½ - year 1910",
      type: "duplex"
    },
    {
      id: 6, 
      geocode: [45.61027871740873, -73.52287100325674],
      description: "789 900$ - 1 x 5 ½, 1 x 6 ½ - year 1963",
      type: "duplex"
    },
    {
      id: 7, 
      geocode: [45.593053875086234, -73.52025873209296],
      description: "689 000$ - 1 x 5 ½, 1 x 6 ½ - year 1925",
      type: "duplex"
    },
    {
      id: 8,
      geocode: [45.50066124750853, -73.70233110510962],
      description: "539 000$ - 3 chambres et 2 sdb- year 1990",
      type: "condo"
    },
    {
      id: 9,
      geocode: [45.5355265479809, -73.62169191860187],
      description: "485 000$ - 1 chambre et 1 sdb- year 2014",
      type: "condo"
    },
  ]
  const redIcon1 = 
  L.divIcon({
    className: 'custom-icon',
    html: `<img src="${redImage1}" alt="icon" style="width: 38px; height: 38px;"/>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });
  const redIcon2 = 
  L.divIcon({
    className: 'custom-icon',
    html: `<img src="${redImage2}" alt="icon" style="width: 38px; height: 38px;"/>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
  });
  const blackIcon = 
  L.divIcon({
    className: 'custom-icon',
    html: `<img src="${blackImage}" alt="icon" style="width: 38px; height: 38px;"/>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
  });

  const condoLocations = markers.filter(marker => marker.type === "condo").map(marker=>marker.geocode);
  const duplexLocations = markers.filter(marker => marker.type === "duplex").map(marker=>marker.geocode);
  const triplexLocations = markers.filter(marker => marker.type === "triplex").map(marker=>marker.geocode);
  
  // const blackIcon = new Icon({
  //   iconUrl: require("./assets/icon-map2.png"),
  //   iconSize:[38,38]
  // });
  return (
    <MapContainer center={center}
                  zoom={13}
                  style = {{width: "100vw", height: "100vh"}}
                 >
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

export default App