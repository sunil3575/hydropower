import React from 'react'
import { Card, CardGroup, Col, Container, Figure, Image, Row, Table } from 'react-bootstrap';
import './Board_Of_Directors.css';
import boardofmembers from '../Components/BoardofDirectors/shree_ram_panday.jpg'
import members from '../Components/BoardofDirectors/hari_parsad_panday.jpg'
import members1 from '../Components/BoardofDirectors/Arjun Pathak.jpg'
import members2 from '../Components/BoardofDirectors/Mrs_kritana_gautam_panday.jpg'
import members3 from '../Components/BoardofDirectors/balram_baral.jpg'
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
      <Image className='members_pic' src={members3} height={200} width={200} alt=''/>
      <h6 className='bod_heading1'><b>Mr. Balram Baral</b><br/>Director</h6>
      </Col>
      <Col>
      <Image className='members_pic' src={members2} height={200} width={200} alt=''/>
      <h6 className='bod_heading1' style={{fontSize:'larger',marginBottom:"40px"}}><b>Mrs. Kritana Gautam Panday</b><br/>Director</h6>
      </Col>
      {/* <Col>
      <Image className='members_pic' src={members4} height={200} width={200} alt=''/>
      <h6 className='bod_heading1'></h6>
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
