// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/Hooks';
import Product from '../Product/Product';
import './products.css';

const Products = () => {
    const [products] = useProducts([]);
    const navigate = useNavigate();

    const hadelNavigate = () => {
        navigate('/product');
    }

    return (
        <div id="products" className="container my-4">
            <div className="row  ">
                <h1 className="product py-2 my-4 text-center">Our Products </h1>
                <div className=" products-container ">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id} product={product}
                        ></Product>)
                    }

                </div>
                <button onClick={hadelNavigate} className=" my-3 w-25 m-auto btn"> Show more products</button>
            </div>
        </div>
    );
};

export default Products;