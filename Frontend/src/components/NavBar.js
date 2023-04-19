import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import UserSettings from "./UserSettings";

function NavBar() {
  let data = JSON.parse(window.localStorage.getItem("user_info")).name;

  if (!data) {
    data = "User";
  }
  return (
    <Navbar>
      <Container className="navbarLinks">
        <Navbar.Brand href="/home">Right🥘vers</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item className="navLinks">
              <Nav.Link href="myrecipes">My Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navLinks">
              <Nav.Link href="shoppinglist">My Shopping List</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav className="userLinks">
          <p className="text-center mt-4 mb-4">Welcome back, {data}</p>
          <Nav.Link className="NavLogOut">
            <UserSettings />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
