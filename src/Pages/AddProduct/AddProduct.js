import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const AddProduct = () => {
    const navigate = useNavigate();
    const handelNAvigate = () => {
        navigate('/myProducts');
    }
    navigate('/myProducts');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Product added to myProduct Page')


            })



    };

    return (
        <div>
            <h3 className="text-center my-5">Please add a product</h3>
            <form className='w-50 mx-auto d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true, })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true, })} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity", { required: true, })} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier", { required: true, })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("imgUrl", { required: true, })} />
                <input className='btn btn-primary' type="submit" value="Add Product" />
                <ToastContainer></ToastContainer>
                <button onClick={handelNAvigate} className='btn btn-primary my-1 text-center '>Jump to myProducts</button>

            </form>

        </div>
    );
};

export default AddProduct;