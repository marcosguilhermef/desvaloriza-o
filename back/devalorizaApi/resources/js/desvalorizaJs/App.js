import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHome from './component/navbar/navbar'; 
import Home from './view/Home';


function App() {
  return (
    <>
      <NavbarHome/>
      <Home/>
    </>
  );
}

export default App;
