import data from './data';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>NFTword</Navbar.Brand>
              </LinkContainer>
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <fotter>
          <div className="text_center">All rights reserved</div>
        </fotter>
      </div>
    </BrowserRouter>
  );
}

export default App;
