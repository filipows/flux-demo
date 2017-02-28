import React, { Component } from 'react';
import AppActions from '../action/app-actions';


class App extends Component {
  render() {
    return (
      <h1
        onClick={AppActions.addItem.bind(null, 'this is the item')}
      >A Flux App</h1>
    );
  }
}

export default App;