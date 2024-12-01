import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import data_news from '../Components/News.json';
import './CardDetail.css';
import { Link } from 'react-router-dom';
import news1 from '../Components/Home/news/news1.jpg'
import news2 from '../Components/Home/news/news2.jpg'
import news3 from '../Components/Home/news/news3.jpg'

const CardDetail = () => {
  return (
    
    <Container className='container_news1'>
      <Row className='row231'>
      <h1 className='heading_latest1'>Latest News</h1>
        <Col style={{textAlign:"center"}}>
        {data_news.map((News)=>(
        <Card className='card1'style={{ width: '30rem',marginBottom:"30px" }}>
          <ListGroup.Item key={News.id}>
          <Link to={`/News/${News.id}`} style={{ textDecoration: "none", color: "#333" }}>
      <Card.Img className='card_img1' variant="top" src={News['Card.Img']}/>
      <Card.Body>
        <Card.Title className='card_title1'>{News['Card.Title']}</Card.Title>
        <Card.Text className='card_text1'>
          <p className='card_paragraph1' style={{lineHeight:"1"}}>{News.description}</p>
        </Card.Text>
      </Card.Body>
      </Link>
      </ListGroup.Item>
    </Card>
    ))}
        </Col>

    </Row>
   </Container>
  )
}

export default CardDetail;
