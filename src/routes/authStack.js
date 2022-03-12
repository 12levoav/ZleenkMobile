import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useSelector} from 'react-redux';
import containers from "../containers";
import InterestsScreen from "../containers/AuthScreens/RegisterScreens/InterestsScreen";

    const Stack = createStackNavigator();

export default function AuthStackNavigator({signInScreenOptions}) {
  const state = useSelector((state) => state.AuthReducer);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Stack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}>
        <Stack.Screen
          name="LoginScreen"
          component={containers.LoginScreen}
          options={{
            headerShown: false,
            headerTitle: '',
            headerBackTitleVisible: false,
            ...signInScreenOptions,
          }}
        />
          <Stack.Screen
              name="PhoneScreen"
              component={containers.PhoneScreen}
              options={{
                  headerShown: false,
                  headerTitle: '',
                  headerBackTitleVisible: false,
                  headerLeft: null,
                  gestureEnabled: false,
                  ...signInScreenOptions,
              }}
          />
          <Stack.Screen
              name="CodeScreen"
              component={containers.CodeScreen}
              options={{
                  headerShown: false,
                  headerTitle: '',
                  headerBackTitleVisible: false,
                  headerLeft: null,
                  gestureEnabled: false,
                  ...signInScreenOptions,
              }}
          />

          <Stack.Screen
              name="StepsScreen"
              component={containers.StepsScreen}
              options={{
                  headerShown: false,
                  headerTitle: '',
                  headerBackTitleVisible: false,
                  headerLeft: null,
                  gestureEnabled: false,
                  ...signInScreenOptions,
              }}
          />
          <Stack.Screen
              name="InterestsScreen"
              component={containers.InterestsScreen}
              options={{
                  headerShown: false,
                  headerTitle: '',
                  headerBackTitleVisible: false,
                  headerLeft: null,
                  gestureEnabled: false,
                  ...signInScreenOptions,
              }}
          />
      </Stack.Navigator>
    </TouchableWithoutFeedback>
  );
}
