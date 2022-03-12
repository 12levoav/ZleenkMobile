import * as React from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
import styles from './styles';
import {useEffect, useRef, useState} from 'react';
import PhoneInputScreen from "../../../../components/PhoneInput";
import {useNavigation} from "@react-navigation/native";


export default function PhoneScreen(props) {
    const {navigate, goBack} = useNavigation();

    const [phone,setPhone] = useState('')
    const [countryCode,setCountryCode] = useState('374')
    const phoneRef = useRef(null)
    const phoneInputRef = useRef(null)

    useEffect(() => {
        return props.navigation.addListener('focus', async () => {
            phoneInputRef.current?.focus()
            setCountryCode(phoneRef.current?.getCallingCode())
        });
    }, []);



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled={true} style={{flex:1}}>
        <TouchableWithoutFeedback >

        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.headerTextBig}>Գրի՛ր հեռախոսահամարդ</Text>
                <Text style={styles.headerTextSmall}>ստացիր մեկանգամյա կոդ</Text>
            </View>

            <PhoneInputScreen
                phoneRef={phoneRef}
                value={phone}
                setPhone={(code)=>{
                    let new_code = code.replace(/[^0-9]/g, '')
                    setPhone(new_code.trim())
                }}
                autoFocus={true}
                textInputProps={{
                    blurOnSubmit:false,
                    keyboardType:'phone-pad',
                    autoFocus:true,
                    value:phone,
                    ref:phoneInputRef,
                }}

                headerText={'Հեռախոսահամար'}
                styles={styles}/>


            <TouchableOpacity disabled={!phoneRef.current?.isValidNumber(phone)} onPress={()=>{
                setCountryCode(phoneRef.current?.getCallingCode())
                navigate('CodeScreen',{phone})
            }} style={[styles.loginButton,{opacity:phoneRef.current?.isValidNumber(phone)?1:0.5}]}>
                <Text style={styles.loginText}>ՍՏԱՆԱԼ ԳԱՂՏՆԱԲԱՌ</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Արդեն գրանցվե՞լ ես
                  </Text>
                <TouchableOpacity onPress={()=>navigate('LoginScreen')}  style={styles.registerButton}>
                    <Text style={styles.registerText}>Մուտք գործիր</Text>
                </TouchableOpacity>
            </View>


     </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
  }

