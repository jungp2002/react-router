import React, { Suspense } from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';

import Detail from './Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Shop = React.lazy(() => import('./Shop'));

function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Suspense fallback={<div>Shop loading</div>}>
            <Route path="/shop" exact component={Shop}/>
          </Suspense>
          <Route path="/shop/:id" component={Detail}/>
        </Switch>
      </Router>

    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
