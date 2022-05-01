// import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/Hooks';
import Product from '../Product/Product';
import './products.css';

const Products = () => {
    const [products] = useProducts([]);


    return (
        <div id="products" className="container">
            <div className="row ">
                <h1 className="my-5 text-center">Our Products </h1>
                <div className=" products-container">
                    {
                        products.slice().map(product => <Product
                            key={product._id} product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;