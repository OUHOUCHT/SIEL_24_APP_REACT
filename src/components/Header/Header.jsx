import { Navbar, Nav, Container ,NavDropdown } from 'react-bootstrap';
import logo from '/logo--4.png'
import { IoMdPhotos } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MdInfoOutline, MdStarPurple500 } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { Tb360View } from "react-icons/tb";
import './Header.css'
import { useState } from 'react';
import { SiReadthedocs } from "react-icons/si";
import { FaInfo } from "react-icons/fa";

const Header = () => {


  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    // Collapse the Navbar after clicking on an item
    setExpanded(false);
  };


  return (
    <Navbar expanded={expanded}  fixed='top' expand="lg"  id="navbar-custom"  >
    <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Brand href="#" className="site-logo mx-auto">
        <img
          src={logo}
          alt="parlement"
          height="70"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav id='nav-custom' >
        {
          /** 
                    
          <Nav.Link href="/" className="nav-link ">
            <IoHomeSharp className="mr-1" size={25} />&nbsp;&nbsp;الرئيسية
          </Nav.Link>
          
          */
        }

          <NavDropdown title={<span><IoHomeSharp size={20} /> &nbsp;الرئيسية</span>}  id="collasible-nav-dropdown"   >

              <NavDropdown.Item   as={Link} to="/"  onClick={handleNavItemClick} >              
                  <GiBookshelf  size={20} />&nbsp;&nbsp;إصدارات البرلمان
              </NavDropdown.Item>
           
            </NavDropdown> 

            <Nav.Link as={Link} to="/album" className="nav-link "  onClick={handleNavItemClick}>
            <IoMdPhotos className="mr-1" size={20} />&nbsp;&nbsp;معرض الصور
          </Nav.Link>

          <Nav.Link as={Link} to="/docs" className="nav-link " onClick={handleNavItemClick}>
            <SiReadthedocs className="mr-1"  size={20} />&nbsp;&nbsp;معرض الوثائق
          </Nav.Link>

          <Nav.Link as={Link} to="/feedBack" className="nav-link " onClick={handleNavItemClick}>
            <MdStarPurple500 className="mr-1"  size={25} />&nbsp;&nbsp; الدفتر الذهبي الإلكتروني  
          </Nav.Link>

 
              {
                /*

          <Nav.Link href="#" className="nav-link " onClick={handleNavItemClick}>
            <FaBookOpen className="mr-1" size={20} />&nbsp;&nbsp; البرنامج
          </Nav.Link>
                */
              }
          </Nav>
          {
                /*
        <Nav className="me-auto" id="nav-streaming" onClick={handleNavItemClick}  >
          <Nav.Link href="#" className="nav-link ">
            <CgMediaLive className="mr-1 " size={25} />&nbsp; النقل المباشر
          </Nav.Link>
        </Nav>
                */
      }
      </Navbar.Collapse>
    
    </Container>
  </Navbar> 

  );
};

export default Header;
