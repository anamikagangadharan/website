// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TributorE from "./components/Tributor E/TributorE";
import Contact from "./components/Contact/Contact";

// import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer";
import Career from "./components/Career/Career"; 

import Main from "./components/Main/Main";
import About from "./components/About/About";
import TributorCM from "./components/Tributor CM/TributorCM";
import Prekets from "./components/Prekets/Prekets";
import Careersub from "./components/Careersub/Careersub";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import Cookie from "./components/Cookie/Cookie";
// import Nav from "./components/Nav/Nav";
// import { Container, Nav, Navbar, Row, Col, NavDropdown } from 'react-bootstrap';

// import { DropDownMenu } from './components/DropDownMenu';
// import { DropDownSubMenu } from './components/DropDownSubMenu'; 
// import PopupGfg from "./components/Popup/Popup";



function App() {
  return (
    <div className="App">
      <Router>
        {/* here */}
             
{/* 
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Devhubspot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <DropDownMenu title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
              <DropDownSubMenu href="#action/3.7" title="Deisgn">
                <NavDropdown.Item href="#action/8.1">Html</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">CSS</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="Development">
                  <NavDropdown.Item href="#action/9.1">Javascript</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.2">Jquery</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
            </DropDownMenu>
          </Nav>
          <Nav>
          <DropDownMenu title="Product" id="collasible-nav-dropdown" alignRight>
              <DropDownSubMenu href="#action/3.7" title="Language">
                <NavDropdown.Item href="#action/8.1">React</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">Anguler</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.3">Ionic</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="backend">
                  <NavDropdown.Item href="#action/9.1">Nodejs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">PHP</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">JAVA</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownSubMenu>
            </DropDownMenu>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Row>
        <Col>
          <h1>React Multi Level Dropdown Menu With Mobile responsive</h1>
        </Col>
      </Row>
    </Container> */} 

        {/* here */}

        {/* <Header /> */}
        {/* <Nav/> */}



        {/* <PopupGfg/> */}
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Main />} />
          <Route path="/tributorE" element={<TributorE />} />
          <Route path="/tributorCM" element={<TributorCM />} />  
          <Route path="/prekets" element={<Prekets />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobroles" element={<Careersub />} />  
          <Route path="/terms" element={<Terms/>}/>  
          <Route path="/privacy" element={<Privacy/>}/>  
          <Route path="/cookie" element={<Cookie/>}/>  
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
