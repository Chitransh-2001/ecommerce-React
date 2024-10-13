
import './App.css';
import Header from './component/header/Header';
import Homepage from './pages/Homepage';
import Login from './component/Login/Login';
import Cart from './component/Cart/Cart'
import Product from './component/Product/Product'
import ProductDetail from './component/ProductDetail/ProductDetail';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductCard from './component/Product/ProductCard';
import Contact from './component/Contact/Contact';
import HomeSectionCard from './component/HomeSectionCard/HomeSectionCard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path ='/allproduct' element={<Product/>}/>
        <Route path='/Detail' element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
