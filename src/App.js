import React from 'react';
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch><br /><br /><br />
        <div className='copyRight'>
          Copyrights © 2022 All Rights Reserved, Made with 💖 by Pushpa Leela Kumari
        </div>
      </Router>

    </div>
  );
}

export default App;
