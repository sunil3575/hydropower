import React from 'react'
import { Card, CardGroup, Col, Container, Figure, Image, Row, Table } from 'react-bootstrap';
import './Board_Of_Directors.css';
import boardofmembers from '../Components/BoardofDirectors/pic1.jpg'
import members from '../Components/BoardofDirectors/pic2.jpeg'
import members1 from '../Components/BoardofDirectors/pic3.jpg'
import members2 from '../Components/BoardofDirectors/pic4.jpg'
import members3 from '../Components/BoardofDirectors/pic5.png'
import members4 from '../Components/BoardofDirectors/pic6.jpeg'
import board_data from '../Components/ExistingBoardOfDirectors.json';
const ExistingBoardOfDirectors = () => {
  return (
   <Container className='contain'>
    <h3 className='director_heading' style={{marginBottom:"50px"}}><u>Board Of Directors</u></h3>
      <Row>
      <Col>
      <Image className='head_pic' src={boardofmembers} height={300} width={300} alt=''/>
      <h6 className='heading3'><b>Mr. Shriram Pandey</b><br/>Chairman</h6>
      </Col>
      <Col>
      <Image className='head_pic' src={members} height={300} width={300} alt=''/>
      <h6 className='heading3'><b>Mr. Hari Parsad Pandey</b><br/>Director (Executive)</h6>
      </Col>
      </Row>
      {/* others memebers pics */}
      
      <Row>
      <Col>
      <Image className='members_pic' src={members1} height={200} width={200} alt=''/>
      <h6 className='bod_heading1'><b>Mr. Arjun Pathak</b><br/>Director</h6>
      </Col>
      <Col>
      <Image className='members_pic' src={members2} height={200} width={200} alt=''/>
      <h6 className='bod_heading1'><b>Mr. Parkash Chandra Dulal</b><br/>Director</h6>
      </Col>
      <Col>
      <Image className='members_pic' src={members3} height={200} width={200} alt=''/>
      <h6 className='bod_heading1' style={{fontSize:'larger',color:"#060672",marginBottom:"40px"}}><b>Mr. Basanta Pandey</b><br/>Director</h6>
      </Col>
      {/* <Col>
      <Image className='members_pic' src={members4} height={200} width={200} alt=''/>
      <h6 className='bod_heading1'>Mr. Kritana Gautam Pandey</h6>
      </Col> */}
      </Row>
    {/* <Table bordered striped hover className='table'>
      <thead>
        <tr>
          <th className='t_heading'>Mr. Shriram pandey</th>
          <th className='t_heading'>Chairman</th>
        </tr>
      </thead>
      <tbody>
        {board_data.map((user)=>(
          <tr key={user['Mr. Shriram pandey']}>
          <td>{user['Mr. Shriram pandey']}</td>
          <td>{user.Chairman}</td>
        </tr>
        ))}
      </tbody>
    </Table> */}
    </Container>
  )
}

export default ExistingBoardOfDirectors;
