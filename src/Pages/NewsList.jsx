import React from 'react'
import News_list from '../Components/News.json';
import { useParams } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './NewsList.css';

const NewsList = () => {
    const {id} = useParams();
    console.log("usepararam hook",id);
    const news = News_list.find((dest) =>dest.id===parseInt(id));
  
    if (!news) {
      return <div className='div_news'>
        News not found.
      </div>;
    }
    return (
        <Container className='news_list_container'>
          <Row><Col>
          <h2 className='news_list_heading'>{news['Card.Title']}</h2>
          <Image className='news_list_image' src={news['Card.Img']} alt={news['Card.Img']} />
          <p className='news_list_paragraph'>{news.description}</p>
          </Col></Row>
        </Container>
      );
  
}

export default NewsList;
