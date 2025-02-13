import React from 'react'
import './Map.css';
import { Col, Container, Row } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});
const Map = () => {

    return (
        <Container className="map-container">
            <Row className="justify-content-center">
                {/* First Map - Head Office */}
                <Col className="col-6 head-column">
                    <h3 className="head-title">Head Office</h3>
                    <p className='project_address'>KATHMANDU-32,TINKUNE</p>
                    {/* <MapContainer
                        center={[27.691057133665804, 85.29570443704152]}
                        zoom={17}
                        className="leaflet-map"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[27.691057133665804, 85.29570443704152]} icon={customIcon}>
                            <Popup><span style={{ color: "green" }}> Head Office - Kathmandu, Nepal</span></Popup>
                        </Marker>
                    </MapContainer> */}
                     <iframe className='map_frame'
        width="100%"
        height="100%"
        style={{border:"3px solid  #016ab9"}}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.374069113072!2d85.34215897321702!3d27.686038608678437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c97832d4e7%3A0xf4fde0e2c46458f5!2sTinkune%2C%20Kathmandu-32!5e1!3m2!1sen!2snp!4v1739261597334!5m2!1sen!2snp"></iframe>
                </Col>

                {/* Second Map - Project Location */}
                <Col className="col-6 project-column">
                    <div className="title">
                        <h3 className="project-title">Project Location</h3>
                        <p className='project_address'>KHARCHE,NASON RURALMUNICIPALITY,MANANG,NEPAL</p>
                    </div>
                    {/* <MapContainer
                        center={[28.593587516307675, 84.41908952499044]}
                        zoom={17}
                        className="leaflet-map"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[28.593587516307675, 84.41908952499044]} icon={customIcon}>
                            <Popup><span style={{ color: "green" }}>Project Site - Manang, Nepal</span></Popup>
                        </Marker>
                    </MapContainer> */}
                    <iframe className='map_frame'
        width="100%"
        height="100%"
        style={{border:"3px solid  #016ab9"}}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d368727.86149297585!2d83.85012897536124!3d28.67226304428578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKHARCHE%2CNASON%20RURALMUNICIPALITY%2CMANANG%2CNEPAL!5e1!3m2!1sen!2snp!4v1739262752503!5m2!1sen!2snp"
      ></iframe>
                </Col>
            </Row>
        </Container>



    )
}

export default Map;
