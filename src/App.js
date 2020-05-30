import React from 'react';
import {Route,HashRouter} from 'react-router-dom';
import Home from './api/home';
import Film from './api/film';

function App() {
  return (
    <HashRouter>
        <div>
          <h1>BATMAN FİLM</h1>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/film" component={Film}/>
          </div>
        </div>
        </HashRouter>
  );
}

export default App;
