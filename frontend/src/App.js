import data from './data';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">NFTworld</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Featured Products</h1>
          {data.products.map((product) => (
            <div className="products" key={product.slug}>
              <div className="product">
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}></img>
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
