import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Service from './components/Service.js';
import Fotter from './components/Fotter.js';
import NotFound from './components/Notfound.js'



function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
        </Route>
          <Route path="/about">
          <About></About>
        </Route>
          <Route path="/service">
          <Service></Service>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Fotter></Fotter>
      </Router>
    </div>
  );
}

export default App;
