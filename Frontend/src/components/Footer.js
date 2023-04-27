import "./NavBar.css";
import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {

  const location = useLocation();

  return (
    <>
      <Navbar className="fixed-bottom">
        <Container id="footer">
          <Nav className="footer-links">
            {location.pathname.includes("about") ? <Nav.Link href="/">Home</Nav.Link> : <Nav.Link href="/about">About</Nav.Link>}
            <Nav.Link href="https://www.linkedin.com/in/olga-tkachenko-078016269/"><i class="fa-brands fa-linkedin"></i></Nav.Link>
            <Nav.Link href="https://github.com/OlgaTkachenkoWebdev"><i class="fa-brands fa-github"></i></Nav.Link>
            <Nav.Link href="mailto:olga.tkachenko.webdev@gmail.com?subject=Love%20your%20website!&body=Hi%20Olga%2C"><i class="fa-regular fa-envelope"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )

}

export default Footer;