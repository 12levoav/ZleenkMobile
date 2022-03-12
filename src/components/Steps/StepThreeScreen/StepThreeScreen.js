import * as React from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Image
} from 'react-native';
import styles from './styles';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {horizontalScale} from "../../../helpers/constants";

const StepThreeScreen =(props) => {
    const {navigate, goBack} = useNavigation();

    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')


    return (

            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.headerTextBig}>Ընտրի՜ր գլխավոր նկար</Text>
                    <Text style={styles.headerTextSmall}>կարող ես բաց թողնել այս քայլը</Text>
                </View>
<TouchableOpacity style={styles.imageTouch}>
            <Image
                resizeMode={'contain'}
                width={horizontalScale(150)}
                height={horizontalScale(150)}
                style={{height: horizontalScale(150)}}
                source={require('./icons/person.png')}/>
</TouchableOpacity>


            </View>
    );
  }

export default  StepThreeScreen