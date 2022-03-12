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
import CodeInput from "../../../../components/CodeInput";
// import CodeInput from 'react-native-code-input';

export default function CodeScreen(props) {
    const {navigate, goBack} = useNavigation();

    const [code,setCode] = useState('')
    const codeRef = useRef(null)


    useEffect(() => {
        return props.navigation.addListener('focus', async () => {
            codeRef.current?.focus()
        });
    }, []);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled={true} style={{flex:1}}>
        <TouchableWithoutFeedback >

        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.headerTextBig}>Մուտքագրի՜ր</Text>
                <Text style={styles.headerTextSmall}>SMS-ը ուղղարկել ենք {props.route.params.phone} համարին։ <Text  onPress={()=>navigate('PhoneScreen')} style={styles.headerTextSmallPink}>Փոխել համարը</Text></Text>
            </View>


            <CodeInput
                setCodeValue={setCode}
                codeValue={code}
            />
            <Text style={styles.notGetSms}>Չեմ ստացել SMS կոդ, <Text  style={styles.sendAgain}>ուղարկել կրկին</Text></Text>


            <TouchableOpacity onPress={()=>navigate('StepsScreen')} disabled={code.length<6} style={[styles.loginButton,{
                opacity:code.length<6?0.5:1
            }]}>
                <Text style={styles.loginText}>ԱՌԱՋ</Text>
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

