import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";


function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
  	userHasAuthenticated(false);
  }

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Visme</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
	<Nav>
	  {isAuthenticated
	    ? <NavItem onClick={handleLogout}>Logout</NavItem>
	    : <>
	        <LinkContainer to="/signup">
	          <NavItem>Signup</NavItem>
	        </LinkContainer>
	        <LinkContainer to="/login">
	          <NavItem>Login</NavItem>
	        </LinkContainer>
	      </>
	  }
	  </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default App;
