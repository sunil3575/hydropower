
import './Gallary.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import 'lightgallery/css/lightgallery.css';
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
import gallary from '../Components/Images/hydropowr.jpg';
import gallary1 from '../Components/Images/hydropower2.png';
import gallary2 from '../Components/Images/1.png';
import gallary3 from '../Components/Images/10.png';
import gallary4 from '../Components/Images/11.png';
import gallary5 from '../Components/Images/12.png';
import gallary6 from '../Components/Images/2.png';
import gallary7 from '../Components/Images/3.png';
import gallary8 from '../Components/Images/4.png';
import gallary9 from '../Components/Images/5.png';
import gallary10 from '../Components/Images/6.png';
import gallary11 from '../Components/Images/8.png';
import gallary12 from '../Components/Images/whatup.jpg';
import gallary13 from '../Components/BoardofDirectors/Arjun Pathak.jpg';
import gallary14 from '../Components/BoardofDirectors/hari_parsad_panday.jpg';
import { cloneElement } from 'react';

const Gallary = () => {
  
   const images =[
    {
      src:gallary,alt:"image"
    },
    {
      src:gallary1,alt:"image1"
    },
    {
      src:gallary2,alt:"image2"
    },
    {
      src:gallary3,alt:"image3"
    },
    {
      src:gallary4,alt:"image4"
    },
    {
      src:gallary5,alt:"image5"
    },
    {
      src:gallary6,alt:"image6"
    },
    {
      src:gallary7,alt:"image7"
    },
    {
      src:gallary8,alt:"image8"
    },
    {
      src:gallary9,alt:"image9"
    },
    {
      src:gallary10,alt:"image10"
    },
    {
      src:gallary11,alt:"image11"
    },
    {
      src:gallary12,alt:"image12"
    },
    {
      src:gallary13,alt:"image13",
    },
    {
      src:gallary14,alt:"image14"
    }

   ];

  const onInit = () => {
    console.log('lightGallery has been initialized');
};

  return(
     <Container className='gallery_container'>
      <h1 className='gallery_heading'>Our Gallary</h1>
     <Row className='gallery_row'>
      <Col className='gallery_column'>
    <LightGallery
         closable={true}
        onInit={onInit}
        speed={1000}
        plugins={[lgThumbnail,lgFullscreen,lgRotate]}>
   
           
           {images.map((image, index) => (
          <a key={index} href={image.src}>
            <img className='img499' src={image.src} alt={image.alt}/>
          </a>
        ))}    
       </LightGallery>
       
       </Col>
       </Row>
     </Container>
     
 )
 }
 

export default Gallary;
