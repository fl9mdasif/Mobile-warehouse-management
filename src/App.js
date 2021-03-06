import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Shared/Header/Header';
import Products from './Pages/Home/Products/Products';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MyProducts from './Pages/MyProducts/MyProducts';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={
          <Blog />
        }></Route>
        <Route path='/product' element={<Products />}></Route>
        <Route path='/myproducts' element={<MyProducts />}></Route>

        <Route path='/product/:productId' element={
          <ProductDetails />
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>

        <Route path='/manageproduct' element={
          <PrivateRoute><ManageProduct /></PrivateRoute>
        }></Route>

        <Route path='/addproduct' element={
          <PrivateRoute><AddProduct /></PrivateRoute>
        }></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer ></Footer>
    </div >

  );
}

export default App;
