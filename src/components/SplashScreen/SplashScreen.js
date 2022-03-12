import * as React from 'react';
import {Image, View} from 'react-native';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function SplashScreen() {
  return (
    <View
      style={{
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*<Image*/}
      {/*  resizeMode={'stretch'}*/}
      {/*  style={{*/}
      {/*    height: heightPercentageToDP('5%'),*/}
      {/*    alignSelf: 'center',*/}
      {/*    width: widthPercentageToDP('35%'),*/}
      {/*  }}*/}
      {/*  source={require('./icons/tumo.png')}*/}
      {/*/>*/}
    </View>
  );
}
