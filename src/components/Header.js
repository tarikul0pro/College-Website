import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'




const Header = () => {

  return (
    <div className="header">
     
      <div>
       
          <Navbar bg="light" expand="lg" text-align="right" className="navbar">
            <Container>

            <img className="img" src="https://cdn.pixabay.com/photo/2020/07/12/07/57/education-5396389__340.png" alt=""  />
              
                <Nav className="me-auto vanbar">
                  <Nav.Link className="navcar" as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link className="navcar" as={Link} to={"/contact"}>Contact</Nav.Link>
                <Nav.Link className="navcar" as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link className="navcar" as={Link} to={"/service"}>Service</Nav.Link>

                </Nav>
             
            </Container>
        </Navbar>
     
        </div>
      

     
    </div>
  );
};

export default Header;