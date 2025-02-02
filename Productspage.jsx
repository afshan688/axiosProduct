import React from 'react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API (example API)
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} width={100} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;


