import React from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import './SlideBar.css';
import image1 from './Home/main_slider/slide 5.png';
import image2 from './Home/main_slider/slide 4.png';
import image3 from './Home/main_slider/slide 3.jpg';



const SliderBar = () => {
  return (
    
        <Col className='slider'>
      <Carousel>
      {/* <Carousel.Item>
        <Image className='img34' src={image1} height="400" width="100%"/>
      </Carousel.Item> */}
      <Carousel.Item>
        <Image className='img34' src={image2} height="400" width="100%" />
      </Carousel.Item>
      <Carousel.Item>
        <Image className='img34' src={image3} height="400" width="100%" />
      </Carousel.Item>
    </Carousel>
    </Col>
     
  )
  
}

export default SliderBar;
  