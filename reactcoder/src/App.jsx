import './App.css'
import NavBar from './Components/NavBar';
import CarWidget from './Components/CartWidget/CarWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a mi E-Commerce'/>
    </div>
  );
}

export default App
