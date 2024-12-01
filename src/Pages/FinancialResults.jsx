import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import './Financial.css';
import financial_data from '../Components/FinancialResults.json';

const FinancialResults = () => {
  return (
    <Container>
    <h3 className='financial_heading'><u>Financial Results</u></h3>
    <Row>
    <Col>
        <Table bordered striped hover className='table' style={{border:"4px solid #ff4500"}}>
  <thead>
  <tr>
      <th>S.No.</th>   
      <th>Particulars</th>
      <th>Results</th>
    </tr>
  </thead>
  <tbody>
    {financial_data.map((user)=>(
      <tr key={user['S.No.']}>
    <td>{user['S.No.']}</td>
    <td>{user.Particulars}</td>
    <td>{user.Results}</td>
  </tr>
    ))}
  </tbody>
  </Table>
  </Col>
    </Row>
</Container>
  )
}

export default FinancialResults;
