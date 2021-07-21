import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import NoHeader from './components/NoHeader'
import Home from './pages/Home'
import Upload from './pages/Upload'

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <NoHeader/>
    <Switch>
     <Route path='/upload' component={Upload}/>
    <Route path='/' component={Home}/>
   
    </Switch>
    </HashRouter>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


