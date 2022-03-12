import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import AuthorizedTab from "./authorizedTab";



const Stack = createStackNavigator();

export default function AuthorizedStack({signInScreenOptions}) {
  return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Stack.Navigator
      mode={'card'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#D0D0D0'},
      }}>
      <Stack.Screen
        name="AuthorizedTab"
        component={AuthorizedTab}
        options={{
          ...signInScreenOptions,
        }}
      />
      {/*<Stack.Screen*/}
      {/*  name="ScheduleDetailScreen"*/}
      {/*  component={containers.ScheduleDetailScreen}*/}
      {/*  options={{*/}
      {/*    ...signInScreenOptions,*/}
      {/*  }}*/}
      {/*/>*/}

    </Stack.Navigator>
      </TouchableWithoutFeedback>
  );
}
