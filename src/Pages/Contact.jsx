import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css';
import Company_Map from './Company_Map';
import Project_Map from './Project_Map';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
   
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };
  

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
     if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } 
     else if(!formData.email.includes("@")) {
      errors.email = '@ is required';
    } 

    //  if (!formData.email.includes(".com")) {
    //   errors.email = '.com is required';
    // } 
   
    // // Check if email contains "@"
    // if (!formData.email("@")) {
    //   errors.email="Email must contain '@'.";
    //   return false;
    // }
    // // Check if email contains ".com"
    // if (!formData.email(".com")) {
    //   errors.email("Email must contain '.com'.");
    //   return false;
    // }
    // else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   errors.email = 'Invalid email address';
    // }

    if (!formData.message.trim()) {
      errors.message = 'Message is required (min 50 character)';
    }
    

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setErrors({});
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <>
    <Container className='form-container'>
        <h3 className='heading'><u>Contact Us</u></h3>
        <Row className='form_container'>
            <Col className='column10'> 
            {isSubmitted && <Alert variant="success">Form submitted successfully!</Alert>}  
            <Form onSubmit={handleSubmit} className='form'>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control className='name' type="text" 
        placeholder="Enter your name" name='name' value={formData.name}
         onChange={handleChange} 
         isInvalid={!!errors.name}
         isValid={formData.name.trim()!== "" && !errors.name}/> {/* for Green border  */} 
      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control className='name'  type="email" name='email' placeholder="Enter your email"
      value={formData.email} onChange={handleChange} 
      isInvalid={!!errors.email}
      isValid={formData.email.trim()!== "" && !errors.email} /> 
      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Form.Group> 
      <Form.Group className="mb-3" controlId="messagebox">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea"rows={4} className="focus"   placeholder="Enter your message..." name='message'
      value={formData.message} onChange={handleChange} 
      isInvalid={!!errors.message} 
      isValid={formData.message.length ===50}/> 
      <Form.Text className="text-muted"> {formData.message.length} / 350 characters</Form.Text>
      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Eligible to send message</Form.Control.Feedback>
      </Form.Group>
      
     
      <Button className='btn' type='Submit' id='submit'>Submit</Button>
    </Form>
   </Col>
   <Col className='col'>
   <p className='paragraph89'><b className='head_contact'>HEAD OFFICE :</b><br/><br/><span >KATHMANDU-32,TINKUNE</span><br/><a style={{color:"green"}} href='#'><i class="fa-solid fa-phone contact-mobile"></i>
   </a> 977-1-4111853<br/><a href='#'><i style={{color:"red"}} class="fa-duotone fa-solid fa-mobile-retro"></i></a> 9856030674<br/><a href='#'>
    <i style={{color:"blue"}} class="fa-solid fa-envelope contact-envelope"></i></a><span > nilgangahydropower@gmail.com</span><br/><br/>
    <b className='contact_office'>CONTACT OFFICE:</b><br/><br/>TILOTTAMA-3,RUPANDEHI<br/><a href='#'><i style={{color:"red"}} class="fa-duotone fa-solid fa-mobile-retro "></i></a>  9857035971/9857037971
   </p>
   </Col>
    </Row>
    <Row className='second_contact_row'>
      <Col className='company_map'><Company_Map/></Col>
      <Col className='project_map'><Project_Map/></Col>
      </Row>
    </Container>
     
    </>
  )
}

export default Contact;
