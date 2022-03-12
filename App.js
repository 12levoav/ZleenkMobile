import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Router from './src/routes';
import {Provider} from 'react-redux';
console.disableYellowBox = true;

import createStore from './src/store/configureStore';

function App(props) {
  const [store, setStore] = useState(createStore());
  useEffect(() => {
    setStore(createStore());
  }, []);
  return (
      <Provider store={store.store}>
        <StatusBar
            translucent={false}
            // backgroundColor={'#6A4392'}
            barStyle="light-content"
        />

        <Router />
      </Provider>
  );
}

export default App;
