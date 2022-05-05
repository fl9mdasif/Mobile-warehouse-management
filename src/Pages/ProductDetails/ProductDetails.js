// export default ServiceDetail;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProducts from '../../hooks/Hooks';
// import useProducts from '../../hooks/Hooks';

const ProductDetails = () => {
    const [products] = useProducts({})
    const { productId } = useParams();
    const navigate = useNavigate();
    // const [products, setProducts] = useProducts({});
    const [product, setProduct] = useState({});
    const url = `http://localhost:5000/product/${productId}`;

    useEffect(() => {
        // console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);



    const navigateToAddProduct = () => {
        navigate('/addproduct')
    }


    //delivery product
    const deliveryProduct = (id) => {
        console.log(products)


        const newQuantity = parseInt(products.quantity) - 1;
        const makeQuantity = { newQuantity };
        // const url = `http://localhost:5000/product/${productId}`;

        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(makeQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Product has been delivered successfully')


            })

    }
    return (
        <div className='w-75 mx-auto text-center'>
            <h2 className='m-3'>Manage Product</h2>
            <img className="w-25" src={product.imgUrl} alt="" />
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
                <div className="card-body">
                    <button onClick={deliveryProduct} className='btn btn-primary w-50'>Delivered</button>
                    <ToastContainer />
                </div>
                <div className="card-body">
                    <button className='btn btn-primary w-50' onClick={() => navigateToAddProduct()}>Add Product</button>
                </div>
                <div className="card-body">
                    <Link to='/manageproduct'><button className='btn btn-primary w-50' >Delete Product</button></Link>
                </div>
                {/* 
                <div className="card-body">
                    <button className='btn btn-primary w-50' onClick={() => navigateToUpdateQuantity(_id)}>Update Quantity</button>
                </div>
                
                 */}
            </div>
        </div>
    );
};

export default ProductDetails;