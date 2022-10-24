import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';



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
