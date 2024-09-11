import React,{useState} from 'react';
import{MapContainer, TileLayer, Marker, useMapEvents }from 'react-leaflet';
import'leaflet/dist/leaflet.css';
import { tileLayer } from 'leaflet';


const Map=()=>{
    
    const [location , setLocation]= useState([-1.283689, 36.817223]);



const LocationMarker =()=>{
    useMapEvents({
        click(e) {
            setLocation([e.latlng.lat, e.latlng.lng]);
        }
    })
 return<marker position={location}/>
    
}

return(
    <>
    <div>
        <h1>select pizza Destination</h1>
        <MapContainer
        center={location}
        zoom={12}
        style={{height:"400px",width:"100%"}}
        >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
        </MapContainer>
        <div>
        <h3>Selected Location:</h3>
        <p>Latitude: {location[0]}, Longitude: {location[1]}</p>
      </div>

    </div>


    </>
)
}

export default Map;