// export default ServiceDetail;
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../hooks/Hooks';



const ProductDetails = () => {

    const { productId } = useParams();
    const [products, setProducts] = useProducts({});
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    // console.log(service)
    return (
        <div className='w-75 mx-auto text-center'>
            <h2 className='m-3'>Manage Product</h2>
            <img className="w-25" src={product.imgUrl} alt="Card image cap" />
            <div className="card card-group text-center row">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush p-0">
                    <li className="list-group-item">Price: {product.price}</li>
                    <li className="list-group-item">Quantity: {product.quantity}</li>
                    <li className="list-group-item">Supplier: {product.supplier}</li>
                </ul>
                {/* <div className="card-body">
                    <button className='btn btn-primary w-75'>Delivered</button>
                </div>
                <div className="card-body">
                    <button className='btn btn-primary w-75' onClick={() => navigateToUpdateQuantity(_id)}>Update Quantity</button>
                </div>
                <div className="card-body">
                    <button className='btn btn-primary w-75' onClick={() => navigateToAddShoe()}>Add Shoe</button>
                </div>
                <div className="card-body">
                    <button className='btn btn-primary w-75' onClick={() => handleDelete(_id)}>Delete Shoe</button>
                </div> */}
            </div>
        </div>
    );
};

export default ProductDetails;