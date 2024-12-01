import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import cabinet_news from '../Components/Home/news/news2.jpg';
import './CabinetApproves.css';

const CabinetApproves = () => {
  return (
  <Container className='cabinet_container'>
    <Row className='cabinet_row'>
    <h2 className='cabinet_heading'>Cabinet Approves Rs 5,792-Crore Investment In SJVN's Nepal Hydro Project.</h2>

        <Col>
        </Col>
        <Col xs={6}>
        <Image className='cabinet_image' src={cabinet_news} height="400px" width="100%" alt='picture'/>
        </Col>
        <Col>
        </Col>
        <p className='cabinet_paragraph'><b>The Cabinet Committee on Economic Affairs,</b> headed by Prime Minister Narendra Modi, 
            has approved an investment of Rs 5,792 crore in a hydropower project in Nepal, which 
            is being developed by SJVN Ltd. The 669-megawatt Lower Arun hydroelectric project is 
            located downstream of another 900 MW plant on the river Arun in the Sankhuwasabha district of Nepal. 
            This project is designed to generate 2,900 mi The mega hydel power project is expected to be commissioned 
            within five years. The generated power will be sold to India via a transmission line up to Sitamarhi, Bihar. 
            Last month, SJVN received an investment from the Indian Renewable Energy Development Agency Ltd. of Rs 290
             crore through special purpose vehicles for setting up a 900 MW Upper Karnali hydropower project in Nepal.
             The project is in advanced stages of development and will be the country's largest hydropower plant after completion.
              It will be connected to the Indian grid through dedicated transmission lines, which will be developed by GMR Group
               through a Nepal-based subsidiary. Shares of SJVN closed 1.74% lower at Rs 143.9 apiece, ahead of the announcement, 
               compared to a 1.08% decline in the benchmark BSE Se.</p>
    </Row>
  </Container>
  )
}

export default CabinetApproves;
