import React, {useRef, useState} from 'react';
import AuthStackNavigator from './authStack';
import SplashScreen from '../components/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AuthorizedStack from './authorizedStack';


function Router() {
  const state = useSelector((state) => state.AuthReducer);
  const [loading, setLoading] = useState(true);
  const _persist = useSelector((state) => state._persist);
  React.useEffect(() => {
    setLoading(false);
  }, [state.token]);
  return (
    <NavigationContainer>


      {loading || !_persist.rehydrated ? (
        <SplashScreen />
      ) : state.token !== null ? (
        <AuthorizedStack />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
}
export default Router;
