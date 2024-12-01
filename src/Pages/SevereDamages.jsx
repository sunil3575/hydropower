
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import news from '../Components/Home/news/news1.jpg'
import './SevereDamages.css'
import news_data from '../Components/News.json';


const SevereDamages = (props) => {
  return (

   
    <Container className='news_container'>
      
      <Row className='news_row'>
      <h2 className='news_heading'>Lack of disaster preparedness causing severe damages to hydropower projects in Nepal.</h2>
       
        <Col>
        </Col>
        <Col xs={6}>
        
        <Image className='news_image' src={news} height="400px" width="100%" alt='picture'/>
    
        </Col>
        <Col>
        </Col>
        <p className='news_paragraph'><b>KATHMANDU, Jan 27: On June 14, 2023,</b> the employees working in the under-construction Super Hewakhola hydropower project at Chainpur, Sankhuwasabha, went to sleep after having dinner. The heavy flood in Hewakhola at around 9:30 PM not only washed away 18 workers along with their tents built on the river bank, but also damaged more than half a dozen structures of the project.

Keshav Aryal, the director of Ishan Construction Pvt Ltd, who was responsible for the construction of the civil engineering structures of the Super Hewa Khola hydroelectric project, had dinner with the same workers just before the flood. Fortunately, Aryal survived as he left the site an hour and a half before the disaster struck. Of the 18 individuals working on the project, only four bodies were recovered, leaving others unaccounted for.

“When the flood hit, the ground shook just like the 2015 earthquake. The flood washed away the big boulders and trees," Aryal said, remembering the moment of the flood. "Due to the sudden flash flood, those who were sleeping in the tents didn't even get a chance to escape. They were swept away by the flood as we watched them helplessly,” he added.


Harka Bahadur Tamang, chairman of Super Hewa Khola Power Company Limited, said that the floods in Hewa Khola caused human casualties as well as substantial physical damage. "We had never imagined that the flood would hit and cause such great damage," he said.

According to Chairman Tamang, the flood damaged more than half a dozen physical structures such as the project's dam, power house, and water storage pond, resulting in a loss of Rs 220 million. He estimates that it will require Rs 500 million to rebuild the structure damaged by the flood.

The government is planning to raise the living standards of the people by producing hydropower and increasing consumption of electricity in the country and also by selling surplus energy abroad. But questions have been raised about the sustainability and reliability of this plan of the government due to climate change triggering an unexpected pattern of rainfall.</p>
 
      </Row>
   
    </Container>
      
  )
}

export default SevereDamages

