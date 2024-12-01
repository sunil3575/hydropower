import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import team_members1 from '../Components/Home/Team_Members/Team_members1.jpg'
import team_members2 from '../Components/Home/Team_Members/Team_members2.webp'
import team_members3 from '../Components/Home/Team_Members/Team_members3.webp'
import team_members4 from '../Components/Home/Team_Members/Team_members4.webp'
import team_members5 from '../Components/Home/Team_Members/Team_members5.jpg'
import './TeamMembers.css';
import "lightgallery.js/dist/css/lightgallery.css";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate from 'lightgallery/plugins/rotate';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgComment from 'lightgallery/plugins/comment';
import lgHash from 'lightgallery/plugins/hash';
import lgPager from 'lightgallery/plugins/pager';
import lgShare from 'lightgallery/plugins/share';
import lgVideo from 'lightgallery/plugins/video';
import lgMediumZoom from 'lightgallery/plugins/mediumZoom';
import  lgFullscreen from 'lightgallery/plugins/fullscreen';


const TeamMembers = () => {
   const onInit = () => {
      console.log('lightGallery has been initialized');
  };
  return (
   <Container>
    <Row className='team_row'>
        <h3 className='heading' style={{marginTop:"30px"}}><u>Our Team Members</u></h3>
   <Col> 
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4'  src={team_members1} height={150} width={150} alt='image'/>
   
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Free Lancer Consultant</h6>
      
   </Col>
   <Col>
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   
   <Image className='img4'  src={team_members1} height={150} width={150} alt='image'/>

   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Hydro Consult Engineering</h6>
   </Col>  
   <Col>
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4' src={team_members3} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Nepal Electricity Authority</h6>
   </Col>
   <Col>  
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4' src={team_members4} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Hydro Lab Pvt. Ltd.</h6>
   </Col>
   <Col>
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4' src={team_members5} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>International Hydro Consult</h6>
   </Col>
    </Row>
    <Row className='team_row'>
   <Col> 
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}> 
   <Image className='img4'  src={team_members1} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Free Lancer Consultant</h6>
   </Col>
   <Col>
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4'  src={team_members2} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Hydro Consult Engineering</h6>
   </Col>
   <Col>
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4' src={team_members3} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Nepal Electricity Authority</h6>
   </Col>
   <Col> 
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}> 
   <Image className='img4' src={team_members4} height={150} width={150}  alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>Hydro Lab Pvt. Ltd.</h6>
   </Col>
   <Col className='second_team_column'>
   <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
   <Image className='img4' src={team_members5} height={150} width={150} alt='image'/>
   </LightGallery>
      <h6 className='heading1' style={{fontSize:'15px',color:"#060672",marginBottom:"20px"}}>International Hydro Consult</h6>
   </Col>
    </Row>
   </Container>
  )
}

export default TeamMembers;
