import * as React from 'react';
import {Image, Text, View} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import styles from './styles';

export default function PhoneInputScreen({phoneRef,phone,setPhone,headerText,textInputContainer,textInputTitle,phoneInputStyle,phoneContainerStyle,codeTextStyle,textContainerStyle,...props}) {
  return (
      <View style={[styles.textInputContainer,textInputContainer]}>
          <Text style={[styles.textInputTitle,textInputTitle]}>{headerText}</Text>
          <PhoneInput
              ref={phoneRef}
              defaultValue={phone}
              defaultCode="AM"
              layout="first"
              onChangeText={setPhone}
              placeholder={'XX XXX XXX'}
              textInputStyle={[styles.phoneInputStyle,phoneInputStyle]}
              containerStyle={[styles.phoneContainerStyle,phoneContainerStyle]}
              codeTextStyle={[styles.codeTextStyle,codeTextStyle]}
              textContainerStyle={[styles.textContainerStyle,textContainerStyle]}
              countryPickerProps={{withAlphaFilter:true}}


              {...props}


          />
      </View>
  );
}
