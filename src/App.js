import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Productdetails from './pages/Productdetails';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/allproducts' element={<Products/>} />
        <Route path='/product' element={<Productdetails/>} />
        <Route path='/cart' element={<Cart/>} />
        
      </Routes>
    </div>
      
    </>
  );
}

export default App;
