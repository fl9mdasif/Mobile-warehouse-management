import React from 'react';
import useProducts from '../../hooks/Hooks';
// import Product from '../Home/Product/Product';
import './ManageProduct.css'
const ManageProduct = () => {
    const [products, setProducts] = useProducts();

    const manageProductToDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://secure-savannah-30999.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(service => service._id !== id)
                    setProducts(remaining)
                })
        }
    };

    return (
        <div id="products" className="container">
            <div className="row ">
                <h1 className="my-5 text-center">Manage Product</h1>
                <div className=" products-container">
                    {
                        products.slice().map(product => <div
                            key={product._id} product={product}>

                            <div className='w-100 mx-auto'>
                                <div className="card mx-1 card-group text-center row">
                                    <img className="card-img-top" src={product.imgUrl} alt="" />
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
                                        <button id="btn" onClick={() => manageProductToDelete(product._id)} className='btn btn-primary w-75'>Delete Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )}
                </div>
            </div>


        </div>
    );
};

export default ManageProduct;