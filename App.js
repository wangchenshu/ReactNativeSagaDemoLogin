/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import './src/configs'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from './src/store/createStore';
import Navigation from './src/navigations/AppNavigation'

let store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}