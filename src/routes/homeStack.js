import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import HomeScreen from "../containers/HomeScreen";



const Stack = createStackNavigator();

export default function HomeStack({
                                      signInScreenOptions}) {
  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Stack.Navigator
      // mode={'card'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#D0D0D0'},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
