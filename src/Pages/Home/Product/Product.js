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

        <div className='w-100 mx-auto py-2'>
            <div className="card mx-1 card-group text-center row">
                <img className="card-img-top" src={imgUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush p-0">
                    <li className="list-group-item">Price: {price}</li>
                    <li className="list-group-item">Quantity: {quantity}</li>
                    <li className="list-group-item">Supplier: {supplier}</li>
                </ul>
                <div className="card-body">
                    <button onClick={() => navigateProductDetails(_id)} className='btn btn-primary w-75'>Manage Shoe</button>
                </div>
            </div>
        </div>
    );
};

export default Product;