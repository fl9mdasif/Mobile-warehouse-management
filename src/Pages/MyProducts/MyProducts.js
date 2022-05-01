import React from 'react';
import useProducts from '../../hooks/Hooks';
import Product from '../Home/Product/Product';

const MyProducts = () => {
    const [products] = useProducts()
    return (
        <div id="products" className="container">
            <div className="row ">
                <h1 className="my-5 text-center">Our Products {products.length}</h1>
                <div className=" products-container">
                    {
                        products.slice(6).map(product => <Product
                            key={product._id} product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProducts;