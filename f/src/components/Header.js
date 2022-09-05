import { Container, Row, Navbar, Nav, Image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Person, List } from 'react-bootstrap-icons';
import Category from './Category';
import SearchBox from './SearchBox';
import Cart from './Cart';
import './Header.css';

export default function Headers() {
  return (
    <header>
      <Container>
        <Row>
          <Nav className="col"></Nav>
          <Row className="col-3">
            <LinkContainer to="/" className="logo">
              <Navbar.Brand>
                <Image
                  src="https://opensea.io/static/images/logos/opensea.svg/"
                  width="40"
                />
                NFTWorld
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="justify-content-around">
              <Nav className="col-2">
                <Category />
              </Nav>
              <Nav className="col-2">
                <SearchBox />
              </Nav>
              <Nav className="col-2">
                <Cart />
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
