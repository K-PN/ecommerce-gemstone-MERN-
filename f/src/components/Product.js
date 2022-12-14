import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name}></img>
      </Link>
      <Card.Body className="product-info">
        <Card.Body className="product-content-left">
          <Card.Text to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Card.Text>
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </Card.Body>
        <Card.Body className="product-content-right">
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default Product;
