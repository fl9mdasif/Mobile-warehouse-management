import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

const Product = ({ product }) => {
    const navigate = useNavigate()
    const navigateProductDetails = (id) => {
        navigate(`/product/${id}`)
    }

    const { _id, name, description, imgUrl, quantity, price, supplier } = product;
    return (

        <div className='w-100 mx-auto py-2 shadow'>
            <div className="card mx-1 card-group text-center row border-none">
                <img className="card-img-top" src={imgUrl} alt="p" />
                <div className="card-body">
                    <h5 className=" ppp card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush p-0">
                    <li className="ppp list-group-item">Price: {price}/tk</li>
                    <li className="list-group-item">Quantity: {quantity}</li>
                    <li className="list-group-item">Supplier: {supplier}</li>
                </ul>
                <div className="card-body">
                    <button id="btn" onClick={() => navigateProductDetails(_id)} className='btn btn-primary w-75'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;