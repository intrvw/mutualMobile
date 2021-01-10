import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './src/Navigation/MainNavigation';
import { ConfigureStore } from './src/Redux/ConfigureStore';

export default function App() {
  return (
    <Provider store={ConfigureStore()}>
      <MainNavigation/>
    </Provider>
  );
}
