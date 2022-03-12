import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Image
} from 'react-native';
import styles from './styles';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {horizontalScale, verticalScale} from "../../../helpers/constants";
import AntDesign from "react-native-vector-icons/AntDesign";
import HelpModal from "../../HelpModal";

 const StepTwoScreen = () => {
    const {navigate, goBack} = useNavigation();

    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [modalTitle,setModalTitle] = useState('')
    const [modalDescription,setModalDescription] = useState('')
    const [isVisible,setIsVisible] = useState(false)
    const [termsChecked,setTermsChecked] = useState(false)


    return (

            <View style={styles.container}>

                <View style={styles.textInputContainer}>
                    <View  style={styles.titleContainer}>
                        <Text style={styles.textInputTitle}>Ինչպե՞ս քեզ դիմենք</Text>
                        <TouchableOpacity onPress={()=>
                        {    setIsVisible(true)
                            setModalTitle('Ինչպե՞ս քեզ դիմենք')
                            setModalDescription('Սա կարճ լատինատառ անուն է, որով ընկերները հիշելու են քեզ: \n' +
                                'Օրինակ՝ Dinasaur (🦕), Moon66 կամ պարզապես vardan_simonyan')
                        }
                        }>
                            <AntDesign  name={'questioncircleo'} size={verticalScale(26)} color={'#20BDC8'}/>

                        </TouchableOpacity>
                    </View>

                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <View  style={styles.titleContainer}>
                    <Text style={styles.textInputTitle}>Ստեղծել գաղտնաբառ</Text>
                    <TouchableOpacity onPress={()=>
                    {    setIsVisible(true)
                        setModalTitle('Գաղտնաբառ')
                        setModalDescription('Խնդրում ենք գրիր այնպիսի մի բան, որ հետագայում կարողանաս հեշտ մտաբերել: Գաղտնաբառը պիտի պարունակի ամենաքիչը վեց նիշ, օրինակ՝ Sona2007@')
                    }
                    }>
                        <AntDesign  name={'questioncircleo'} size={verticalScale(26)} color={'#20BDC8'}/>

                    </TouchableOpacity>
                    </View>
                    <TextInput
                        value={surname}
                        onChangeText={setSurname}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Կրկնել գաղտնաբառ</Text>
                    <TextInput
                        value={surname}
                        onChangeText={setSurname}
                        style={styles.textInput}
                    />
                </View>




                <View style={styles.termsView}>
                    <TouchableOpacity onPress={()=>setTermsChecked(!termsChecked)}>
                    <MaterialIcons name={termsChecked?'check-box':'check-box-outline-blank'} size={horizontalScale(25)}/>
                    </TouchableOpacity>
                        <Text style={styles.termText}>Համաձայն եմ հավելվածի օգտագործման <Text onPress={()=>console.log(123)} style={styles.termButtonText}>պայմաններին</Text></Text>
                </View>

                <HelpModal
                    isVisible={isVisible}
                    onDismiss={()=>
                    { setIsVisible(false)
                    setModalTitle('')
                    setModalDescription('')}
                       }

                    modalTitle={modalTitle}
                    modalDescription={modalDescription}
                />



            </View>


    );
  }

export default StepTwoScreen