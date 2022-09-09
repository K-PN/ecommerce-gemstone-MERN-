import { Container, Row, Navbar, Nav, Image, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { TelephoneFill, Person, List } from 'react-bootstrap-icons';
import Category from './Category';
import SearchBox from './SearchBox';
import Cartmini from './Cartmini';
import './Header.css';

export default function Headers() {
  return (
    <header style={{
      backgroundImage: `url("//cdn.shopify.com/s/files/1/0908/7252/t/4/assets/slide-image-1.jpg?v=70396289972732491791627441413")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Container>
        <Row>
          <Nav className='col address'>
            <Navbar.Text>
              <TelephoneFill size={25} />
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

    </header>
  );
}
