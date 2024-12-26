import React from 'react'
import "./style.css";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

import L from 'leaflet';
import blackImage from "./assets/icon_map2.png";
import redImage1 from "./assets/icon_red1.png";
import redImage2 from "./assets/icon_red2.png";
import Container_Map from './Container_Map';
import Notes_Map from './Notes_Map';


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
      geocode: [45.570628999721265, -73.54558273209418],
      description: "429 905$ - 2 chambres et 1 sdb- En construction , Neuve",
      type: "condo"
    },
    {
      id: 9,
      geocode: [45.57446641604179, -73.54803273209403],
      description: "459 000$ - 2 chambre et 2 sdb- year 2017",
      type: "condo"
    },
    {
      id: 10,
      geocode: [45.58187521475713, -73.53652051675263],
      description: "750 000$ - 1 x 5 ½, 1 x 9 ½ - year 1958",
      type: "duplex"
    },
    {
      id: 11,
      geocode: [45.571385444917944, -73.53786834743516],
      description: "449 900$ - 3 chambre et 2 sdb- year 2016",
      type: "condo"
    }
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

 
  return (
    <div className="map-wrapper">
      <div className="map-container">
        <Container_Map markers = {markers} blackIcon={blackIcon} redIcon1={redIcon1} redIcon2={redIcon2} center={center}/>
      </div>
      <div className="info-container">
        <Notes_Map blackImg={blackImage} redImg1={redImage1} redImg2={redImage2}/>
      </div>
    </div>
   
  )
}

export default App