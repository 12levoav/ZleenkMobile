import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const compose = composeWithDevTools({realtime: true, fport: 8097});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }
export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
