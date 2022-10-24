import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {

  return (
    <>
      <Navbar color={"#ddd"}/>
      <ItemListContainer/>
      <Footer/>
    </>
  );
}

export default App;
