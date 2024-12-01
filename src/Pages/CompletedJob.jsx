import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Completed.css';

const CompletedJob = () => {
  return (
    <Container className='completed_container'>
        <Row className='completed_row'>
            <Col className='completed_column'>
            <h3 className='completed_heading'><u>Completed JOB</u></h3>
            <ul className='comp_list'>
                <li  className='paragraph11'>
                 Connection Agreeement Completed.
                </li>
                <li  className='paragraph11'>
                  Power Purchased Agreement Completed.
                </li>
                <li  className='paragraph11'>
                  Generation License Obtained.
                </li>
                <li  className='paragraph11'>
                  IEE Apporoved.
                </li>
                <li  className='paragraph11'>
                  Retail Design under progress.
                </li>
                <li  className='paragraph11'>
                 Road-Already upto Powerhouse.
                </li>
                <li  className='paragraph11'>
                  Land Acquisition in process.
                </li>
                <li  className='paragraph11'>
                 Constrution Power-Poles installation going on.
                </li>
            </ul>
            <h3 className='completed_heading'><u>Further Plan</u></h3>
            <ul>
                <li className='paragraph11'>
               Financial Closure.
                </li>
                <li  className='paragraph11'>
              Equity Management.
                </li>
                <li  className='paragraph11'>
                Target Of full fledge construction from Falgun,2081.
                </li>
            </ul>
            </Col>
        </Row>
    </Container>
    
  )
}

export default CompletedJob;
