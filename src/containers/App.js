import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import {observer} from 'mobx-react';
import Routers from './Routers';

@observer
class App extends Component {
  render(){
      return (
        <Router>
          <Routers />
        </Router>
      )
  }
}
export default App;
