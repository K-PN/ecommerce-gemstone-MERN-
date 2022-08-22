import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">NFTworld</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((product) => (
          <div className="products" key={product.slug}>
            <div className="product">
              <a href={`product/{product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="product-info">
                <a href={`product/{product.slug}`}>
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
  );
}

export default App;
