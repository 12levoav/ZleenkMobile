import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import HomeStack from "./homeStack";
const Tab = createBottomTabNavigator();



export default function AuthorizedTab({signInScreenOptions, route}) {
  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Tab.Navigator
      // tabBar={(props) => <MyTabBar {...props} />}
      >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerLeft: null,
          gestureEnabled: false,
          ...signInScreenOptions,
        }}
        // options={{
        //   tabBarLabel: '',
        //   tabBarIcon: ({color, size}) => (
        //     <CustomIcon
        //       size={normalize(30)}
        //       name={'schedule'}
        //       style={{color: color}}
        //     />
        //   ),
        // }}
      />

    </Tab.Navigator>
      </TouchableWithoutFeedback>
  );
}
