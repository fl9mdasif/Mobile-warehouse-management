import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
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
            .then(result => console.log(result))
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
            </form>

        </div>
    );
};

export default AddProduct;