import React from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import './AboutProject.css';
import project from '../Components/About_Project_images/project1.jpg';
import './Feature.css';
import feature_data from '../Components/Feature.json'

const AboutProject = () => {
  return (
    <Container>
        <Row className='project_row'>
        <h3 className='heading_1'><u>Suti Khola Hydropower Project</u></h3>
       <Col>
      <p className='paragraph para-2' style={{marginBottom:"20px"}}><b style={{textTransform:"uppercase"}}>Suti Khola Hydropower Project</b> is a run-of-the-river
(ROR) type Hydropower project located in Nason Rural
Municipality, Manang district. It has installed capacity
of 21 MW and will be able to generate 122.51 GWh of
energy annually after deduction of consumptive use,
outage and system losses. Suti Khola is a snow fed
river, which has 42.9% dependable flow of 5.81 m3/sec,
and is adopted as the design discharge of the project.
There is no Glacial Lake above the project site, hence
making it risk free from Glacial Lake Outburst Flood
(GLOF). The net head available for the project is 427.70
m and gross head of 444.00 m. The weir is 16 m long
with under-sluice opening of 2mx 2m. Gravel Trap
overall dimension is 6m(L) x 8.7m(W).
Desanding basin has two chambers and overall
dimension is 60m x 14.5m x 6.2 m (LxBxH). It is followed
by steel penstock pipe of length 3500m and internal
dia of 1.7m - Im. Powerhouse, located at Nason rural
municipality is surface type with dimension of 40m x
15m x 15m (LxBxH).
The entire project alignment from intake to the power-
house is located on the right side of Suti Khola. There
aren't any tunnels in this project. The main project area
lies in government land area, except for a small part of
switchyard - which needs private land to be
purchased.
The Transmission line of 132 KV from powerhouse to
Dharapani Substation is 10.6 km long. Dharapani
substation is under construction at the moment. Power
is evacuated from Dharapani Substation to Khudi
Substation which is ready for charging.
The project structures lies within the following
coordinates:<br/>
<b>Latitude 28035'31" N to 28037'40"N and<br/>
5 Longitude 84022'30" E to 84025'39" E.</b></p>
</Col>
{/* </Row>
        <Row className='row'> */}
            <Col className='project_column'>
            <Image className='project_image pro_img' src={project} 
             style={{border:"4px solid #f16807",marginBottom:"40px", borderRadius:"30px", textAlign:"center"}}/>
            </Col>
        </Row>
        <Row>
        <Container>
        <h3 className='feature1_heading'><u>Salient Feature</u></h3>
    <Row>
    <Col>
    <Table bordered striped hover className='table'>
    <thead>
    <tr>
        <th className='feature_heading'>River</th>
        <th className='feature_heading'>Suti Khola</th>
      </tr>
    </thead>
    <tbody>
      {feature_data.map((user)=>(
         <tr key={user.River}>
         <td>{user.River}</td>
         <td>{user['Suti Khola']}</td>
       </tr>
      ))}
    </tbody> 
  </Table>
    </Col>
    </Row>
  </Container>
        </Row>
    </Container>
   
  )
}

export default AboutProject;
