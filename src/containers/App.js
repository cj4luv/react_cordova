import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {observer} from 'mobx-react';
import Routers from './Routers';

@observer
class App extends React.Component {
  render(){
      return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
      )
  }
}
export default App;
