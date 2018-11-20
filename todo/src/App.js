import React, { Component} from 'react';
import { Route } from 'react-router-dom';

import Product from './pages/Product';
import Eventview from './pages/Eventview';

class App extends Component {

  render() {
    return (
        <div>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/event" component={Eventview}/>
        </div>
    )
  }
}

export default App;

