import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';

const ProductCard = () => {
    const {slug} = useParams();
    const product = data.products.filter(product => product.slug === slug)[0];

    return (
        <div className='page'>
            <h1>Product Card Page</h1>
            {
                product !== undefined ? (
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p>Price ${product.price}</p>
                    </div>
                ) : (
                    <h2>Product Not Found</h2>
                )
            }
        </div>
    );
}

export default ProductCard;
