import { Container, Row, Navbar, Nav, Image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Person, List } from 'react-bootstrap-icons';
import Category from './Category';
import SearchBox from './SearchBox';
import Cartmini from './Cartmini';
import './Header.css';

export default function Headers() {
  return (
    <header>
      <Container>
        <Row>
          <Nav className='col address'>
            <Navbar.Text>
              +9-123-234-567
            </Navbar.Text>
          </Nav>
          <Row className="col">
            <LinkContainer to="/" className="logo">
              <Navbar.Brand>
                <Image
                  src="./logo.png"
                  width={240}
                />
              </Navbar.Brand>
            </LinkContainer>
            <Nav className='header-widget'>
              <Nav className="col-2 button-widget">
                <Category />
              </Nav>
              <Nav className="col-2 button-widget">
                <SearchBox />
              </Nav>
              <Nav className="col-2 button-widget">
                <Cartmini />
              </Nav>
            </Nav>
          </Row>
          <Row className="w-auto col">
            <Nav className="justify-content-end">
              <Nav.Item className="nft-mini-cart"></Nav.Item>
              <Nav.Item className="nft-account">
                <Nav.Link to="/">
                  <Person size={33} color="black" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Row>
      </Container>
      <Navbar className="header-nav-container">
        <Container>
          <Dropdown>
            <Dropdown.Toggle variant="dark" size="lg">
              <List
                style={{
                  marginBottom: '5px',
                  marginRight: '15px',
                  color: 'white',
                  fontSize: '1.5em',
                }}
              />
              All Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  );
}
