import { Col, Container, Row } from 'react-bootstrap';
import './GoogleCalender.css';



const GoogleCalender = () => {
  
  
  return (
    <Container className='calender_container'>
        <Row>
        <h2 className='calender_heading'><u>Calender 2081</u></h2>
        <Col></Col>
        <Col className='column_calender'xs={12}> 
       
    {/* <iframe className='calender_frame' src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=Asia%2FKathmandu&bgcolor=%23f16807&showPrint=0&showCalendars=0&title=Nilganga%20Hydropower&showTabs=0&src=NWZlY2I5ZmY2ZTYwNGRkNTZjMWQ1ZDQ3MDU5ZDlkZTVmMWM5NDk3MmQwM2Y5N2MxYmM2NmEwM2U2OWZkMjdmMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTEwMTU5NjY2MjQ5ODE2MDE2NzdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4ubnAjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E&color=%2333B679&color=%23009688&color=%23D50000">
    </iframe> */}
            <iframe  className='nepali_calender' src="https://www.hamropatro.com/widgets/calender-medium.php"></iframe>

      </Col>
      <Col></Col>
      
        </Row>
    </Container>
  )
}

export default GoogleCalender;
