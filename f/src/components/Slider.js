import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';

export default function Slider() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products');
            setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="//cdn.shopify.com/s/files/1/0908/7252/t/4/assets/slide-image-1.jpg?v=70396289972732491791627441413"
                    alt="First slide"
                />
                <Carousel.Caption>
                    /* 322424*\
<div>
<Row>
{products.map((product) => product.rating === 5 && (
<Col key={product.slug} sm={6} md={4} lg={2} className="mb-3">
<Product product={product}></Product>
</Col>
))}
</Row>
</div>

/* 322424*\
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="//cdn.shopify.com/s/files/1/0908/7252/t/4/assets/slide-image-1.jpg?v=70396289972732491791627441413"
alt="Second slide"
/>

<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="//cdn.shopify.com/s/files/1/0908/7252/t/4/assets/slide-image-1.jpg?v=70396289972732491791627441413"
alt="Third slide"
/>

<Carousel.Caption>
<h3>Third slide label</h3>
<p>
Praesent commodo cursus magna, vel scelerisque nisl consectetur.
</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
);
}