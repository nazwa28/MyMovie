import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {  AiOutlineLogin } from 'react-icons';
import './Navbar.css';
import LoginPage from './loginPage';

<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

function NavScrollExample() {

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className='navbar fixed-top'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbarLeft me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <div className='grup'>
            <Link to="/"><img className='header_icon' src='https://www.psdstamps.com/wp-content/uploads/2020/01/movies-stamp-png-768x512.png'/></Link>
            <div className='categories'>
              <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
              <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
              <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
          </div>
            {/* <Link to="/login">< AiOutlineLogin /></Link> */}
           
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="inputText me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form> <LoginPage />
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;