import { useState } from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Components/LOGO/logo-Nilganga.png'


const Footer = () => {
  return (
    <>
      <Container fluid className='footer'>
        <Row className='footer_row' >
          {/* <Col className='footer_logo' xs={1}>logo</Col> */}
          <Col className='footer_col mt-4' >
            <h6 className='heading-footer'><b className='company_name'>Nilganga Hydropower Company Pvt. Ltd.</b></h6>
            {/* <p className='footer_address'><b>CONTACT US :</b></p> */}
          </Col>
        </Row>
        <Row className='px-4 mx-4' style={{textAlign: "center",marginTop:"30px"}}>
           {/* Head Office detail column section */}
          <Col>
          <p className='project_site'><b> PROJECT SITE : </b> KHARCHE,NASON RURAL MUNICIPALITY, MANANG, NEPAL</p>

            <p></p>
          </Col>

           {/* Proje site detail column section */}
          <Col>
          <p className='head_office'><b className='head_inner'> HEAD OFFICE : </b>KATHMANDU-32, TINKUNE</p>

            <p className='address_info'>TEL : 977-1-4111853 MOBILE NO : 9856030674 </p>
            <p className='address_info'><span className='inner_email'>E-MAIL: nilgangahydropower@gmail.com</span></p>
            {/* <p className='address_info'>MOBILE NO: 9887036571/9667037971</p> */}
            
          </Col>
          {/* Contact Office detail column section */}
          <Col className='contact_office22'><b className='office_number'>CONTACT OFFICE : </b><span className='contact_rupendehi'>TILOTTAMA-3, RUPANDEHI</span><br/>
          <p className='address_info'><span className='first_number'>MOBILE NO : 9857035971</span><br/><span className='second_number' >9857037971</span></p></Col>
          {/* <Col xs={12}><p style={{borderRadius:"30px"}}><img className='logo_footer'  src={logo}/></p></Col> */}

        </Row>
        {/* Third footer  for Social Media Link */}
        <Row style={{marginTop:"10px"}}>
          <Col className='column_footer' style={{ textAlign: "center", margin: "0%"}}>
            <p className='paragraph_icon'>
              {/* <h5 className='heading57' style={{color:"#060672",fontSize:"25px"}}>Follow Us</h5> */}
              <a className='facebook' href="https://www.Facebook.com/" target="_blank">
                <i className="fab  fa-facebook-f"></i>
              </a>
              <a className='twitter' href="https://www.twitter.com/" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className='instagram' href="https://www.Instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i></a></p>
          </Col>
        </Row>
       {/*Fourth row for Copy right section */}
        <Row className='second_footer_row'>
          <Col className='second_footer_column' xs={6}>
            <p className='paragraph-copyright' style={{ marginRight: "30px" }}>
              <b>Copyright <a href=''><i style={{ color: "white", fontSize: "12px",
                 marginTop: "18px" }} class="fa-regular fa-copyright"></i></a> 
                 2024 Nilganga Hydropower company</b></p>
          </Col>
          <Col><p className='paragraph-copyright' style={{ marginTop: "14px" }}>
            powered by : <b><u>somarjun tech company</u></b></p></Col>
        </Row>
      </Container>







    </>
  )
}

export default Footer;
