import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Gallery } from 'react-grid-gallery';
import photos from "../Components/Images/whatup.jpg"



const Page = () => {
  return (
  <Container>
    <Row>
        <Col>
        {/* <Gallery photo={photo}> */}

        {/* const  photos = [ */}
  {
    <Image src={photos} height="300px" width="100px"/>
   
  }
  {/* {
    <Image src={photos} height="300px" width="400px"/>
   
  } */}

{/* </Gallery> */}

        </Col>
    </Row>
  </Container>
  
  )
}

export default Page;
