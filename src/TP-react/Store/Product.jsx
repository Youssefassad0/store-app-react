import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(result => setProduct(result));
    }, [id]);

    return (
        <div className='container d-flex align-items-center justify-content-center mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.image} alt="product" className='img-fluid' />
                </div>
                <div className='col-md-6'>
                    <h3 className='mt-3'>{product.title}</h3>
                    <p className='mt-3'>{product.description}</p>
                    <h3 className='mt-3'>{product.category}</h3>
                    <h4 className='text-primary'>${product.price}</h4>
                    <button className='btn btn-primary mt-3'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
