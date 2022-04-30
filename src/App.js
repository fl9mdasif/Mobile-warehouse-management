import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';
import Products from './Pages/Home/Products/Products';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='product' element={<Products />}></Route>
        <Route path='/product/:productId' element={
          <ProductDetails />}
        ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/addproduct' element={<RequireAuth><AddProduct /></RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div >

  );
}

export default App;
