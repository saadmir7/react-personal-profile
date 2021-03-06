import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const scrollTo = (e) => {
        scroller.scrollTo(e.target.href.split('#')[1], {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
          });
    }
    return(
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">
                Muhammad Saad Mir
            </Navbar.Brand>
            <div title="Github Profile">
                <Navbar.Brand href="https://github.com/saadmir7/" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </Navbar.Brand>
            </div>
            <div title="LinkedIn Profile">
                <Navbar.Brand href="https://www.linkedin.com/in/muhammad-saad-mir/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Navbar.Brand>
            </div>
            <div title="Download Resume">
                <Navbar.Brand href="/Muhammad_Saad_Mir_Resume.pdf" target="_blank">
                    <FontAwesomeIcon icon={faFileDownload} />
                </Navbar.Brand>
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link onClick={scrollTo} href='#home'>Home</Nav.Link>
                <Nav.Link onClick={scrollTo} href='#about-me'>About Me</Nav.Link>
                <Nav.Link onClick={scrollTo} href='#my-projects'>Projects</Nav.Link>
                <Nav.Link onClick={scrollTo} href='#contact-me'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>    
            </Navbar>
        </div>
    );
}

export default NavBar;