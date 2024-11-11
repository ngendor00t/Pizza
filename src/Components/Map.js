import React,{useState} from 'react';
import{MapContainer, TileLayer, Marker, useMapEvents }from 'react-leaflet';
import'leaflet/dist/leaflet.css';
import { tileLayer } from 'leaflet';


const Map=()=>{
    
    const [location , setLocation]= useState([-1.283689, 36.817223]);
    // const [area, setArea] = useState('');



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
// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';

// const Map = () => {
//   const [location, setLocation] = useState([-1.283689, 36.817223]); // Default to Nairobi
//   const [address, setAddress] = useState(''); // For address input

//   // Fetch geolocation from an address using OpenStreetMap's Nominatim API
//   const geocodeAddress = async (address) => {
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
//       );
//       if (response.data.length > 0) {
//         const lat = response.data[0].lat;
//         const lon = response.data[0].lon;
//         setLocation([parseFloat(lat), parseFloat(lon)]); // Update location to geocoded address
//       } else {
//         alert('Location not found');
//       }
//     } catch (error) {
//       console.error('Error geocoding address:', error);
//     }
//   };

//   // Handle user input submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (address) {
//       geocodeAddress(address); // Geocode the user input
//     }
//   };

//   const LocationMarker = () => {
//     useMapEvents({
//       click(e) {
//         setLocation([e.latlng.lat, e.latlng.lng]);
//       },
//     });
//     return <Marker position={location} />;
//   };

//   return (
//     <div>
//       <h1>Select Pizza Destination</h1>

//       {/* Input form to search for an address */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your location"
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Map with draggable marker */}
//       <MapContainer center={location} zoom={12} style={{ height: '400px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <LocationMarker />
//       </MapContainer>

//       <div>
//         <h3>Selected Location:</h3>
//         <p>Latitude: {location[0]}, Longitude: {location[1]}</p>
//       </div>
//     </div>
//   );
// };

// export default Map;
