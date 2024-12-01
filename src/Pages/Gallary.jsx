
import './Gallary.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import boardofmembers from '../Components/BoardofDirectors/pic1.jpg'
import members from '../Components/BoardofDirectors/pic2.jpeg'
import members1 from '../Components/BoardofDirectors/pic3.jpg'
import members2 from '../Components/BoardofDirectors/pic4.jpg'
import members3 from '../Components/BoardofDirectors/pic5.png'
import members4 from '../Components/BoardofDirectors/pic6.jpeg'
import team_members1 from '../Components/Home/Team_Members/Team_members1.jpg'
import team_members2 from '../Components/Home/Team_Members/Team_members2.webp'
import team_members3 from '../Components/Home/Team_Members/Team_members3.webp'
import team_members4 from '../Components/Home/Team_Members/Team_members4.webp'
import team_members5 from '../Components/Home/Team_Members/Team_members5.jpg'
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






const Gallary = () => {
  const directors=[boardofmembers,members,members1,members2,members3,members4];
  const team =[team_members1,team_members2,team_members3,team_members4,team_members5];
  const memberss=[members4];

  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  
  return(
     <Container className='gallery_container'>
      <h1 className='gallery_heading'>Our Gallery</h1>
     <Row className='gallery_row'>
      <Col className='gallery_column'>
      {/* {directors.map((image,index)=>( */}
    <LightGallery
    
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
    <Image className='img499'  src={gallary} alt='image'/>
    <Image className='img499'  src={gallary1}   alt='image'/>
    <Image className='img499'  src={members1}  alt='image'/>
    <Image className='img499'  src={members2}   alt='image'/>
    <Image className='img499'  src={members3}  alt='image'/> 
   
  
    
   
    {/* ))} */}
   
    {/* <Row className='second_gallery_row'> */}
      {/* <Col className='second_gallery_column'> */}
       {/* {team.map((image,index)=>(  */}
    {/* <LightGallery
        onInit={onInit}
        speed={500} */}
        {/* // plugins={[lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom]}>   
    plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}> */}
    
    
    {/* <Image className='img3'  src={team_members1} alt='image'/>
    <Image className='img3'  src={team_members2} alt='image'/>
    <Image className='img3' src={team_members3} alt='image'/> 
    <Image className='img3' src={team_members4}   alt='image'/>
    <Image className='img3' src={team_members5}  alt='image'/> */}
   <Image className='img499'  src={team_members1} alt='image'/>
    <Image className='img499'  src={team_members2} alt='image'/>
    <Image className='img499' src={team_members3} alt='image'/> 
    <Image className='img499' src={team_members4}   alt='image'/>
    <Image className='img499' src={team_members5}  alt='image'/>
    
    
     
    
     {/* <Row className='third_gallery_row'> */}
     {/* <Col className='third_column'> */}
      {/* {memberss.map((image,index)=>( */}
    
        {/* onInit={onInit}
        speed={500}
        plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>  */}
            
             
            <Image className='img499' src={members4} alt='image'/>
            <Image className='img499'/>
            
            
           
       </LightGallery>
       
       
       </Col>
       </Row>
     </Container>
 )
 }

export default Gallary;
