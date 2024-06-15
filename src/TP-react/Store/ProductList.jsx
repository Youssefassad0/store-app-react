import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.get('https://fakestoreapi.com/products');
                setProducts(productResponse.data);
                setData(productResponse.data);

                const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(categoryResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    const chercherProduit = (e) => {
        e.preventDefault();
        if (inputValue === "") {
            alert('Input Required');
        } else {
            const productFilter = data.filter(p => p.title.toLowerCase().includes(inputValue.toLowerCase()));
            setProducts(productFilter);
        }
    };

    const reset = () => {
        setInputValue('');
        setProducts(data);
    };

    const filterByCategory = (category) => {
        const productFilter = data.filter(p => p.category === category);
        setProducts(productFilter);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Liste des Produits</h1>
            <div className="mb-3">
                <Filter
                    chercherProduit={chercherProduit}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    reset={reset}
                />
            </div>
            <div className="row g-3 align-items-center">
                <div className="btn-group">
                    {categories.map((category, index) => (
                        <button className='btn btn-dark' key={index} onClick={() => filterByCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td><img src={product.image} alt={product.title} width={60} height={70} /></td>
                                    <td>
                                        <Link to={`product/${product.id}`} className="text-decoration-none text-dark">
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <div className="bg-dark p-1 text-white text-center rounded">
                                            {product.rating.rate} / {product.rating.count}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No Products Found...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
