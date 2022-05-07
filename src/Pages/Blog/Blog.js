import React from 'react';
import './Blog.css'
// import useProducts from '../../hooks/Hooks';

const Blog = () => {
    // const [products] = useProducts();
    return (
        <div >
            <h1 className=' text-center my-2'>BLOG</h1>
            <div className="blog_con">
                <div className="blog border mx-2 mt-2">
                    <h3 className="text-center  my-3">Javascript vs Node</h3>
                    <h4 className="p-2" >1. Javascript</h4>
                    <p className="p-2">Javascript is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.
                        It is generally used on the client-side server. javascript is designed to build network-centric applications.
                    </p>
                    <h4 className="p-2">2. Node js</h4>
                    <p className="p-2">Nodejs is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.
                        It is generally used on the server-side.Node is designed for data-intensive real-time applications that run on several platforms.
                    </p>
                </div>
                <div className="blog border mx-2 mt-2">
                    <h3 className="text-center  my-3">When to use Node and Mongo</h3>
                    <h4 className="p-2">1. Node js</h4>
                    <p className="p-2">Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                    <h4 className="p-2">2. MongoDB</h4>
                    <p className="p-2">MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                </div>
                <div className="blog border mx-2 mt-2">
                    <h3 className="text-center  my-3">SQL vs noSql</h3>
                    <h4 className="p-2">1. SQL</h4>
                    <p className="p-2"><ul>
                        <li>	SQL databases are primarily called RDBMS or Relational Databases</li>
                        <li>Structured query language (SQL)</li>
                        <li>SQL databases are table based databases</li>
                    </ul></p>
                    <h4 className="p-2">2. noSql</h4><p className="p-2"><ul>
                        <li>NoSQL databases are primarily called as Non-relational or distributed database</li>
                        <li>No declarative query language</li>
                        <li>NoSQL databases can be document based, key-value pairs, graph databases</li>
                    </ul></p>
                </div>
            </div>


        </div>
    );
};

export default Blog;