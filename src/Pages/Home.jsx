import React from 'react'
import SliderBar from '../Components/SliderBar'
import { Card, Carousel, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import './Home.css';
import chairman from '../Components/BoardofDirectors/shree_ram_panday.jpg'
import partners1 from '../Components/Home/partners_company/partner1.png'
import partners2 from '../Components/Home/partners_company/partner2.jpg'
import partners3 from '../Components/Home/partners_company/partner3.png'
import partners4 from '../Components/Home/partners_company/partner4.jpg'
import small_slide1 from '../Components/Home/smallslider/small_slider1.jpg'
import small_slide2 from '../Components/Home/smallslider/small_slider2.jpg'
import small_slide3 from '../Components/Home/smallslider/LOGO7.png'
import team_members1 from '../Components/Home/Team_Members/Team_members1.jpg'
import team_members2 from '../Components/Home/Team_Members/Team_members2.webp'
import team_members3 from '../Components/Home/Team_Members/Team_members3.webp'
import team_members4 from '../Components/Home/Team_Members/Team_members4.webp'
import team_members5 from '../Components/Home/Team_Members/Team_members5.jpg'
import news1 from '../Components/Home/news/news1.jpg'
import news2 from '../Components/Home/news/news2.jpg'
import news3 from '../Components/Home/news/news3.jpg'
import CardDetail from '../Components/CardDetail';
import News_data from '../Components/News.json';
import { Link } from 'react-router-dom';
import '../Pages/NewsList';
import NewsList from '../Pages/NewsList';
import team_pics from '../Components/TeamMembers.json';




const Home = () => {
  return (
    <>
     <div>
 <SliderBar/>
    </div>
    <Container className='container20'  style={{textAlign:"center"}}>
      <Row className='background' style={{marginTop:"30px"}}>
        <Col className='col1'>
      <h3 className='heading' style={{textAlign:"center"}}><span>Nilganga Hydropower Company Ltd.</span></h3>
      <p className='paragraph'>Our goal is to build one of the most comprehensive web 
        portals with regard to Nepal's water resources. This, we believe, 
        can and will contribute to a better understanding and utilization 
        of this vital resource. However, we are aware that this is only 
        possible by partnering with as many institutions (national or 
        international) that have a stake in this sector, be they from the 
        government, private sector, or communities. If you (or your agency) 
        are interested in finding 
        out more about how you can partner with us</p>
        <h6 className='anchor6'><a href='/introduction'>Read More...</a></h6>
        <h2 className='heading10'>21<span style={{fontSize:"20px"}}>MW</span><br/><p className='paragraph' style={{fontSize:"20px", color:"#016ab9",textAlign:"center"}}>Installed Capacity</p></h2>
        </Col>
      <Col className='col1'>
        <h3 className='heading'>Message From Chairman</h3>
        <Image className='img' src={chairman} height={150} width={150} 
        style={{borderRadius:"100%", padding:"10px"}} alt='image'/>
        <p className='paragraph'><span>I heartily welcome all the visitors to NHC(Nilganga Hydropower Company) Web Site. It is our effort to provide related information
           about NHC activities to all using online media as soon as possible. Please don't forget to make your
            comments and suggestions to make this website more fruitful and efficient.</span></p>
            <h6 className='anchor6'><a href='/directors'>Read More...</a></h6>
      </Col>
      </Row>
      {/* <Row className='background'style={{marginTop:"30px",marginBottom:"30px"}}>
        <Col className='col1'>
        <h4 className='heading'>Partners of our Company</h4>
        <Row>
        <Col>
        <Image className='img2' src={partners1} height="150" width="100%" alt='image'/>
        </Col>
        <Col>
        <Image className='img2' src={partners2} height="150" width="100%" alt='image'/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Image className='img2' src={partners3} height="150" width="100%" alt='image'/>
        </Col>
        <Col style={{marginTop:"10px"}}>
        <Image className='img2' src={partners4} height="150" width="100%" alt='image'/>
        </Col>
        </Row>
        </Col> */}
        {/*carosol slide bar */}
        {/* <Col className='col2'>
        <Carousel>
      <Carousel.Item>
        <h6 className='heading10'>Nilganga Hydropower Company</h6>
        <Image className='img3' src={small_slide1} height="350" width="100%"/>
      </Carousel.Item>
      <Carousel.Item>
      <h6 className='heading10'>Suti Khola Hydropower Project</h6>
        <Image className='img3' src={small_slide2} height="350" width="100%" /> */}
        {/* <h6 className='anchor'><a href='/capitalplan' target='_blank'>READ MORE....</a></h6> */}
      {/* </Carousel.Item>
      <Carousel.Item>
      <h6 className='heading10'>Equity Structure of NHC</h6>
        <Image className='img3' src={small_slide3} height="350" width="290"/>
      </Carousel.Item>
    </Carousel>
     <h3 className='heading' style={{padding:"20px"}}>Equity Structure of NHC </h3>
        <Image src={LOGO4} height="200" width="300" alt='picture'/>
        <h6 className='anchor'><a href='/capitalplan' target='_blank'>READ MORE....</a></h6> 
        </Col>
      </Row> */}
   {/* <Row  className='background2'>
   
    
   <h3 className='heading' style={{marginTop:"30px"}}>Our Team Members</h3>
   
   <Col>  
   <Image className='img4'  src={team_members1} height={150} width={150} style={{borderRadius:"100%"}} alt='image'/>
      <h6 className='heading1' style={{fontSize:'15px',color:"#016ab9",marginBottom:"20px"}}>Free Lancer Consultant</h6>
   </Col>
   <Col>
   <Image className='img4'  src={team_members2} height={150} width={150} style={{borderRadius:"100%"}} alt='image'/>
      <h6 className='heading1' style={{fontSize:'15px',color:"#016ab9",marginBottom:"20px"}}>Hydro Consult Engineering</h6>
   </Col>
   <Col>
   <Image className='img4' src={team_members3} height={150} width={150} style={{borderRadius:"100%"}} alt='image'/>
      <h6 className='heading1' style={{fontSize:'15px',color:"#016ab9",marginBottom:"20px"}}>Nepal Electricity Authority</h6>
   </Col>
   <Col>  
   <Image className='img4' src={team_members4} height={150} width={150} style={{borderRadius:"100%"}} alt='image'/>
      <h6 className='heading1' style={{fontSize:'15px',color:"#016ab9",marginBottom:"20px"}}>Hydro Lab Pvt. Ltd.</h6>
   </Col>
   <Col>
   <Image className='img4' src={team_members5} height={150} width={150} style={{borderRadius:"100%"}} alt='image'/>
      <h6 className='heading1' style={{fontSize:'15px',color:"#016ab9",marginBottom:"20px"}}>International Hydro Consult</h6>
   </Col>
    
   <h6 className='team_anchor'><a href='/team'>Read More...</a></h6>
   </Row> */}

   </Container>
    <Container className='container_news'>
      <Row className='row23'>
      <h1 className='heading_latest'>Latest News</h1>
      {News_data.map((News)=>(
       <Col> 
   <Card className='card'>
   <ListGroup.Item key={News.id}>
   <Link to={`/News/${News.id}`} style={{ textDecoration: "none", color: "#333" }}>
      <Card.Img className='card_img' variant="top" src={News['Card.Img']}></Card.Img>
      <Card.Body>
        <Card.Title className='card_title'>{News['Card.Title']}</Card.Title>
        <Card.Text className='card_text'>
          <p className='card_paragraph' style={{lineHeight:"1"}}>{News['Card.Text']}</p>
        <Card.Link className='card_link' style={{textDecoration:"none",color:"#82d5ec"}}><b>Read More...</b></Card.Link>
        </Card.Text>
      </Card.Body>
      <Card.Body>
      </Card.Body>
      </Link>
      </ListGroup.Item>
    </Card>
    </Col>
  ))}
      </Row>
    </Container>
    </>
  )
}

export default Home;
