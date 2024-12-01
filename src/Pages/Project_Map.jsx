import React from 'react'
import { Col, Container,Row } from "react-bootstrap";
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Project_Map.css';


const Project_Map = () => {
 
const customicon=new L.Icon({
    iconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycQrtjRCIDBDH94svrNakGr2g8d-4fAsRpQ&s",
    iconSize:[50,50],
    iconAnchor:[25,50],
}); 
    return (
 
       <Container style={{marginBottom:"50px",marginTop:"30px"}}>
        <Row>
            <h1 className="heading" style={{textAlign:"center",marginTop:"30px"}}><u>Project Location/Site</u><br/><span style={{color:"black",fontSize:"small"}}>KHARCHE,NASON RURALMUNICIPALITY,MANANG,NEPAL.</span></h1>
        <Col className='column_map'>
        <MapContainer className='map_container' center={[28.593587516307675, 84.41908952499044]} zoom={17} style={{height: "500px", width: "100%",border:"2px solid  #FF8000"}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker  position={[28.593587516307675, 84.41908952499044]} icon={customicon}>
            <Popup>
            <h6 style={{color:"red"}}>Suti Khola</h6>
            </Popup>
          </Marker>
        </MapContainer>
        </Col>
        </Row>
       </Container>
  );
 };
export default Project_Map;



