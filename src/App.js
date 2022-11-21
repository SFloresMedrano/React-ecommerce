import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartProvider from './CartContext';
import Cart from './components/Cart';

function App() {
 
  return (
      <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/category/:idcategory" element={<ItemListContainer/>}/>
          <Route path="/item/:iditem" element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
      <Footer/>
      </BrowserRouter>

  );
}

export default App;
