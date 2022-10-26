import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Simon'} style={{ 
        background: '#2E3B55',
        fontSize: '2 rem' }}/>
      <Footer/>
    </>
  );
}

export default App;
