import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
// import calender_icon from '../Components/calender/calendar-icon.png';
import logo from '../Components/Home/company_logo/LOGOS/LOGOS/White LoGO.png'
import ActiveNavButton from "react-activenav-button";
import { Link, useLocation } from 'react-router-dom';


// how to navigation items open automatilly then follow this step. 
const NavigationBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open
  const [activeItem, setActiveItem] = useState(""); // Tracks the active nav item

  const location = useLocation();

  

  // Handle opening a specific dropdown
  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);  // Open the dropdown for the hovered item
  };

  // Handle closing the dropdown
  const handleMouseLeave = () => {
    setOpenDropdown(null);  // Close the dropdown when mouse leaves
  }
  
  // // Handle click on a nav item
  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };
  
 


  return (     
    <Navbar expand="lg" className="navbar" sticky='top'>
      <Container>
          <Navbar.Brand className='brand' href="/home"><img className='logo_image' src={logo}/><small className="company_name">Nilganga Hydropower</small>
        <br/><small className='project_name'><br/>Suti Khola project</small><br/><small className='project_capacity'><br/>21MW</small></Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='collapse'>
          <Nav activeKey={location.pathname} className="mx-auto">  
         <Nav.Link  className={activeItem === "home" ? "active" : ""} onClick={()=>handleClick("home")} href='/'>Home</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown" show={openDropdown==="first"} onMouseEnter={()=>handleMouseEnter('first')} onMouseLeave={handleMouseLeave}>
            <Nav.Link  className={activeItem === "introduction" ? "active" : ""} onClick={() => handleClick("introduction")} href='/introduction'>Introduction</Nav.Link>
            <Nav.Link  className={activeItem === "directors" ? "active" : ""} onClick={() => handleClick("directors")} href='/directors'>Existing Board Of Directors</Nav.Link>
            {/* <Nav.Link  className={activeItem === "team" ? "active" : ""} onClick={() => handleClick("team")} href='/team'>Team Members</Nav.Link> */}
            </NavDropdown>
            <NavDropdown title="Project" id="basic-nav-dropdown" show={openDropdown==="second"} onMouseEnter={()=>handleMouseEnter('second')} onMouseLeave={handleMouseLeave} >
            <Nav.Link  className={activeItem === "aboutproject" ? "active" : ""} onClick={() => handleClick("aboutproject")} href='/aboutproject'>About Project</Nav.Link>
            <Nav.Link  className={activeItem === "projectcost" ? "active" : ""} onClick={() => handleClick("projectcost")} href='/projectcost'>Project Cost</Nav.Link>
            <Nav.Link  className={activeItem === "capitalplan" ? "active" : ""} onClick={() => handleClick("capitalplan")} href='/capitalplan'>Capital Plan</Nav.Link>
            <Nav.Link  className={activeItem === "completedjob" ? "active" : ""} onClick={() => handleClick("completedjob")} href='/completedjob'>Completed JOB</Nav.Link>
            <Nav.Link  className={activeItem === "financial" ? "active" : ""} onClick={() => handleClick("financial")} href='/financial'>Financial Results</Nav.Link>
            <Nav.Link  className={activeItem === "capitalstruture" ? "active" : ""} onClick={() => handleClick("capitalstruture")} href='/capitalstruture'>Energy & Revenue</Nav.Link>  
            </NavDropdown>
            <Nav.Link  className={activeItem === "gallary" ? "active" : ""} onClick={() => handleClick("gallary")} href='/gallary'>Gallary</Nav.Link>
          </Nav>
        <Nav activeKey={location.pathname} className='navigation2'>
        <NavDropdown className='company_calender'  title="Calender" id="basic-nav-dropdown"  show={openDropdown==="third"} onMouseEnter={()=>handleMouseEnter('third')} onMouseLeave={handleMouseLeave}>
          {/* <Container> */}
            <Row><Col>
            <iframe  className='nepali_calender' src="https://www.hamropatro.com/widgets/calender-small.php"></iframe>
            </Col></Row>
          {/* </Container>               */}
        </NavDropdown>
        <NavDropdown  title="Career" id="basic-nav-dropdown"  show={openDropdown==="fourth"} onMouseEnter={()=>handleMouseEnter('fourth')} onMouseLeave={handleMouseLeave}>
        <Nav.Link   className={activeItem === "vacanc" ? "active" : ""} onClick={() => handleClick("vacanc")} href='/vacanc'>Vacancy Notices</Nav.Link>
            </NavDropdown>
            <Nav.Link  className={activeItem === "contact" ? "active" : ""} onClick={() => handleClick("contact")} href='/contact'>Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
       
      
       
  )
}


export default NavigationBar;
