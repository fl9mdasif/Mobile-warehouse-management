// export default ServiceDetail;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import useProducts from '../../hooks/Hooks';
import './Pd.css'
// import useProducts from '../../hooks/Hooks';

const ProductDetails = () => {
    // const [products] = useProducts({})
    const { productId } = useParams();
    const navigate = useNavigate();
    // const [products, setProducts] = useProducts({});
    const [product, setProduct] = useState({});
    const { quantity } = product;
    let oldQuantity = parseInt(quantity);


    useEffect(() => {
        // console.log(url)
        const url = `https://secure-savannah-30999.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);



    const navigateToAddProduct = () => {
        navigate('/addproduct')
    }


    //delivery product
    const deliveryProduct = (id) => {
        // console.log(product)

        const newQuantity = oldQuantity - parseInt(1);
        console.log(newQuantity)
        const makeQuantity = { newQuantity };
        // const url = `https://secure-savannah-30999.herokuapp.com/product/${productId}`;
        const url = `https://secure-savannah-30999.herokuapp.com/product/${productId}`;

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

    //Submit product quantity
    const handleQuantitySubmit = (e) => {
        e.preventDefault();
        // console.log(product.quantity)
        const inputQuantity = e.target.number.value;
        const newQuantity = oldQuantity + parseInt(inputQuantity)
        const setQuantity = { newQuantity }
        console.log('old', oldQuantity, 'new', newQuantity, setQuantity)

        const url = `https://secure-savannah-30999.herokuapp.com/product/${productId}`;
        //send data to the server
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(setQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Product Quantity has been updated successfully')
                e.target.reset();
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
                <form onSubmit={handleQuantitySubmit}>
                    <input placeholder="number" type="number" name="number" id="" required />
                    <input type="submit" value="AddQUantity" />
                    <ToastContainer />
                </form>
                <div className="card-body">
                    <button onClick={deliveryProduct} className='btn btn-primary w-50'>Delivered</button>

                </div>
                <div className="card-body">
                    <button className='btn btn-primary w-50' onClick={() => navigateToAddProduct()}>Add Product</button>
                </div>
                <div className="card-body">
                    <Link to='/manageproduct'><button className='btn btn-primary w-50' >Delete Product</button></Link>
                </div>


            </div>
        </div>
    );
};

export default ProductDetails;