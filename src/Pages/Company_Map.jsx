import React from 'react'
import { Col, Container,Row } from "react-bootstrap";
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Company_Map.css';


const getIconSize = () => {
  if (window.innerWidth > 320) {
    return [20,20]; // Small icon for mobile screens
  }
  return [50, 50]; // Default icon size for larger screens
};

// // Set your Mapbox access token
// mapboxgl.accessToken = 'pk.eyJ1Ijoic3NqaGhzLTM1NzAiLCJhIjoiY20xYXprdG55MXN6eDJsc2pkZXBtamJwdSJ9.0oRffCQBEzmlFfz2v0uPHQ';
//custom icon
const customicon=new L.Icon({
    iconUrl:"https://lh5.googleusercontent.com/p/AF1QipOIyv_XYrVRCLhFQVDHVNb0BJasdLSzmaFYPrpk=w408-h306-k-no",
    iconSize:getIconSize(),
    iconAnchor:[50,50],
});
 const Company_Map = () => {
    
    return (
       <Container style={{marginBottom:"10px",marginTop:"20px"}}>
        <Row>
        <Col>
            <h1 className="heading" style={{textAlign:"center",marginTop:"30px"}}><u className='head_map' style={{color:"#FF8000"}}>Head Office</u></h1>
        <MapContainer center={[27.691057133665804, 85.29570443704152]} zoom={17} style={{ height: "500px", width: "100%",border:"2px solid #FF8000" }}>
          <TileLayer className='company_frame'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker position={[27.691057133665804, 85.29570443704152]} icon={customicon}>
            <Popup>
            <h6 style={{color:"red"}}>KATHMANDU-32 TINKUNE</h6>
            </Popup>
          </Marker>
        </MapContainer>
        </Col>
        </Row>
       </Container>
  );
 };

export default Company_Map;


