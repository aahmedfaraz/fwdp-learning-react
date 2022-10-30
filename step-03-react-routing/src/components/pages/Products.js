import React from 'react';
import data from '../../data.json';
import { Link } from 'react-router-dom';

const Products = () => {
    // console.log(data.products);
    return (
        <div className='page'>
            <h1>Products Page</h1>
            <ul>
                {
                    data.products.map(product => (
                        <li key={product.id} className="product-info">
                            <h2>{product.title}</h2>
                            <p>Price ${product.price}</p>
                            <Link to={`/products/${product.slug}`}>See Product</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Products;
