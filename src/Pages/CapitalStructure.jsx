import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import CapitalStructure_data from '../Components/CapitalStructure.json'
import './CapitalStructure.css';

const CapitalStructure = () => {
  return (
    <Container className='capital_container'>
    <Row>
      <Col>
    <h4 className='capital_heading'><u>Energy & Revenue</u></h4>
    <Table bordered striped hover className='table' style={{border:"2px solid #ff4500"}}>
  <thead className='capital_thead'>
  <tr>
      <th>Season</th>   
      <th>GWH Energy</th>
      <th>%</th>
      <th>Rate /Unit</th>
      <th>Revenue Crore NPR</th>
    </tr>
  </thead>
  <tbody className='capital_tbody'>
    {CapitalStructure_data.map((user)=>(
      <tr key={user.Season}>
      <td>{user.Season}</td>
      <td>{user['GWH Energy']}</td>
      <td>{user['%']}</td>
      <td>{user['Rate /Unit']}</td>
      <td>{user['Revenue Crore NPR']}</td>
    </tr>
    ))}
</tbody>
  </Table>
    <h6 className='heading87' style={{fontSize:"larger",color:"#f16807", fontWeight:"700"}}>Energy rate Escalation for next 8 years by 3%</h6>
    <p className='paragraph'><span>First year Revenue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  NPR 72.86 Crore</span></p>
    <p className='paragraph'>9th year Revenue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; NPR 90.34 Crore</p>
    <p className='paragraph'>Yearly Management Cost  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NPR 5.2 Crore/Year.</p>

    <h4 className='capital_heading'><u>Capital Structure</u></h4>
    <p className='paragraph'>Authorized Capital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. 1.8 Billion</p>
    <p className='paragraph'>Issued Capital &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. 1.8 Billion</p>
    </Col>
    </Row>
</Container>
  )
}

export default CapitalStructure
