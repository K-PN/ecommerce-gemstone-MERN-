import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';

export default function Headers() {
  return (
    <header>
      <Container>
        <Row>
          <LinkContainer to="/">
            <Navbar.Brand className="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12">
              NFTword
            </Navbar.Brand>
          </LinkContainer>
          <Row className="col-lg-5">
            <SearchBox />
          </Row>
          <Row className="col-lg-4">
            <Nav className="justify-content-end">
              <Nav.Item className="nft-mini-cart">
                <Nav.Link to="/">Cart</Nav.Link>
                <Nav></Nav>
              </Nav.Item>
              <Nav.Item className="nft-account">
                <Nav.Link to="/">Account</Nav.Link>
              </Nav.Item>
              <Nav.Item className="menu-bar">
                <Nav.Link to="/">Menu</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Row>
      </Container>
      <Navbar>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
