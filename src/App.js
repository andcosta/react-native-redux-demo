import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Navigation />
      </Provider>
    );
  }
}
