import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHome from './component/navbar/navbar'; 
import Home from './view/Home';
import Sobre from './view/Sobre';
import { Route, Switch,BrowserRouter  } from "react-router-dom";

import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize('G-FQX53NY6HS', { debug: false });
  return (
    <>
      <BrowserRouter>
      <NavbarHome/>
        <Switch> 
          <Route exact  path="/" component={Home}/>
          <Route path="/sobre" component={Sobre}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
