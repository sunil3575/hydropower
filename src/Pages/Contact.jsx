import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';
import Company_Map from './Company_Map';
import Project_Map from './Project_Map';
import Map from './Map';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validate = () => {
    const errors = {};

    // validation for name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = 'Only letters are allowed';
    }

    //validation for email
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

    if (!formData.message.trim() || formData.message.length < 10) 
      errors.message = 'Message is required (min 10 characters)';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.send(
        'service_tzfqavc', // Replace with your EmailJS Service ID
        'template_xssg3ih', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'xM1zddauFLoojsbO4' // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => console.error('Error sending email:', error));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className='form1-container'>
   
              {isSubmitted && <Alert style={{marginTop:"20px"}}  variant="success">Form submitted successfully!</Alert>}  
            
      <Row className='form_container'>
      <h3 className='heading'><u>Contact Us</u></h3>
      {/* <Col className='col-1'></Col> */}
        <Col className='column10'> 
       
          <Form onSubmit={handleSubmit} className='form'>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control  name='name' placeholder="Enter your name"
                value={formData.name} onChange={handleChange} 
                isInvalid={!!errors.name} isValid={formData.name.trim() !== "" && !errors.name}/> 
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control  name='email' placeholder="Enter your email"
                value={formData.email} onChange={handleChange} 
                isInvalid={!!errors.email} isValid={formData.email.trim() !== "" && !errors.email} /> 
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="messagebox">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" style={{resize:"none"}} rows={4} placeholder="Enter your message..."
                name='message' value={formData.message} onChange={handleChange} 
                isInvalid={!!errors.message} isValid={formData.message.length >= 10}/> 
              <Form.Text className="text-muted"> {formData.message.length} / 350 characters</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>

            <Button className='btn' type='Submit' id='submit'>Submit</Button>
          </Form>
        </Col>
        
        {/* <Col className='col' style={{marginTop:"25px"}}>
        
          <p className='paragraph89'><b className='head_contact'>HEAD OFFICE :</b><br/><span className='span_head'>KATHMANDU-32,TINKUNE</span><br/>
            <a style={{color:"green"}} href='#'><i className="fa-solid fa-phone contact-mobile"></i></a> 977-1-4111853<br/>
            <a href='#'><i style={{color:"red"}} className="fa-duotone fa-solid fa-mobile-retro"></i></a> 9856030674<br/>
            <a href='#'><i style={{color:"blue"}} className="fa-solid fa-envelope contact-envelope"></i></a><span> nilgangahydropower@gmail.com</span><br/>
            <b className='contact_office'>CONTACT OFFICE :</b><br/>TILOTTAMA-3,RUPANDEHI<br/>
            <a href='#'><i style={{color:"red"}} className="fa-duotone fa-solid fa-mobile-retro "></i></a>  9857035971/9857037971<br/>
            <b className='construction_office'>CONSTRUCTION OFFICE :</b><br/>
            <span>POKHARA , KASKI</span><br/>
            <a href='#'><i style={{color:"red"}} className="fa-duotone fa-solid fa-mobile-retro"></i></a> 9856030674
          
          </p>
        </Col> */}
        <Col className='main_column'>
          <Col>
        <p className='paragraph89'><b className='head_contact'>HEAD OFFICE :</b><br/><span className='span_head'>KATHMANDU-32,TINKUNE</span><br/>
          <a style={{color:"green"}} href='#'><i className="fa-solid fa-phone contact-mobile"></i></a> 977-1-4111853<br/>
          <a href='#'><i style={{color:"red"}} className="fa-duotone fa-solid fa-mobile-retro"></i></a> 9856030674<br/>
          <a href='#'><i style={{color:"blue"}} className="fa-solid fa-envelope contact-envelope"></i></a><span> nilgangahydropower@gmail.com</span></p></Col>
          <Col><p className='paragraph89'>
          <b className='contact_office'>CONTACT OFFICE :</b><br/>TILOTTAMA-3,RUPANDEHI<br/>
          <a href='#'><i style={{color:"red"}} className="fa-duotone fa-solid fa-mobile-retro "></i></a>  9857035971/9857037971
          </p>
          </Col>
          <Col><p className='paragraph89'>
          <b className='construction_office'>CONSTRUCTION OFFICE :</b><br/>
          <span>POKHARA , KASKI</span><br/>
          <a href='#'><i style={{color:"red"}} className="fa-duotone fa-solid fa-mobile-retro"></i></a> 9856030674
          </p>
          </Col>
       
        </Col>
        {/* <Col className='col-1'></Col> */}
      </Row>
      <Row className='second_contact_row'>
        {/* <Col className='company_map'><Company_Map/></Col>
        <Col className='project_map'><Project_Map/></Col> */}
        <Col className='company_map2'><Map/></Col>
        
      </Row>
    </Container>
  );
};

export default Contact;

