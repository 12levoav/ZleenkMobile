import * as React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
// import {Colors, globals} from '../../../helpers/helper';
import styles from './styles';
import {useState} from 'react';
import PhoneInputScreen from "../../../components/PhoneInput";
import {useNavigation} from "@react-navigation/native";


export default function LoginScreen(props) {
    const {navigate, goBack} = useNavigation();

    const [phone,setPhone] = useState('')
    const [countryCode,setCountryCode] = useState('+374')
    const [password,setPassword] = useState('')



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} enabled={false} style={{flex:1}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        <View style={styles.container}>
<View style={styles.topContainer}/>

            <PhoneInputScreen
                phone={phone}
                setPhone={setPhone}
                headerText={'Հեռախոսահամար'}
                styles={styles}/>



         <View style={styles.textInputContainer}>
             <Text style={styles.textInputTitle}>Գաղտնաբառ</Text>
             <TextInput
                 value={password}
                 secureTextEntry={true}
                 onChangeText={setPassword}
                 style={styles.textInput}
             />
         </View>
            <TouchableOpacity style={styles.forgetContainer}>
                <Text style={styles.forgetText}>Մոռացել եմ գաղտանաբառը</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>ՄՈՒՏՔ</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Դեռ չե՞ս գրանցվել
                  </Text>
                <TouchableOpacity onPress={()=>navigate('PhoneScreen')} style={styles.registerButton}>
                    <Text style={styles.registerText}>Գրանցվի՜ր</Text>
                </TouchableOpacity>
            </View>


     </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
  }

