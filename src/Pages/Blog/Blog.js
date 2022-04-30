import React from 'react';
import useProducts from '../../hooks/Hooks';

const Blog = () => {
    const [products] = useProducts()
    return (
        <div>
            <h3>this is blog page{products.length}</h3>

        </div>
    );
};

export default Blog;