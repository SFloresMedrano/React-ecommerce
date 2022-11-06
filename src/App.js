import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App;
