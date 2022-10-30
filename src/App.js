import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Simon'}/>
      <Footer/>
    </>
  );
}

export default App;
