import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import Capital_data from '../Components/CapitalPlan.json'
import './CapitalPlan.css';

const CapitalPlan = () => {
  return (
   
     <Container>
        <Row>
         <Col className='col'>
          <h3 className='capital_heading'><u>Capital Plan</u><span style={{fontSize:"medium"}}><br/>(LOAN EQUITY RATIO)</span></h3>
  <Table bordered striped hover  className='table' style={{border:"3px solid "}}>
      <thead>
      <tr>
          <th>S.No</th>
          <th>Particulars</th>
          <th>Crore Npr.</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody style={{fontWeight:"20px"}}>
        {Capital_data.map((user)=>(
         <tr key={user['S.No']}>
         <td>{user['S.No']}</td>
         <td>{user.Particulars}</td>
         <td>{user['Crore Npr.']}</td>
         <td>{user['%']}</td>
       </tr>
        ))}
        </tbody>
      </Table>
      </Col>
      </Row>
      </Container>
    
  )
}

export default CapitalPlan;
