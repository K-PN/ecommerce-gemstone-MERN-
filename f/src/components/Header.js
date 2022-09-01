import { Container, Row, Navbar, Nav, Image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Cart, Person, List, ListNested } from 'react-bootstrap-icons';
import SearchBox from './SearchBox';
import './Header.css';

export default function Headers() {
  return (
    <header>
      <Container>
        <Row>
          <Nav className="col">
            <LinkContainer to="/">
              <Navbar.Brand>
                <Image
                  src="https://opensea.io/static/images/logos/opensea.svg/"
                  width="40"
                />
                NFTWorld
              </Navbar.Brand>
            </LinkContainer>
          </Nav>
          <Row className="col-6">
            <SearchBox />
          </Row>
          <Row className="w-auto col">
            <Nav className="justify-content-end">
              <Nav.Item className="nft-mini-cart">
                <Nav.Link to="/">
                  <Cart size={28} color="black" />
                </Nav.Link>
              </Nav.Item>
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
            <Dropdown.Toggle variant="dark" size="lg" id="">
              <List
                style={{
                  marginBottom: '5px',
                  marginRight: '15px',
                  color: 'white',
                  fontSize: '1.5em',
                }}
              />
              {/* <ListNested /> */}
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
