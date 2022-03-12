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
import Picker from "../../Forms/Picker";


 const StepOneScreen =() =>{
    const {navigate, goBack} = useNavigation();

    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')


    return (

            <View style={styles.container}>



                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Անուն</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Ազգանուն</Text>
                    <TextInput
                        value={surname}
                        onChangeText={setSurname}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Մարզ</Text>
                    <Picker
                        subtitle={'fffsdf'}

                        data={[].map((i) => i.name)}
                        style={styles.picker}
                        value={state}
                        onSelect={(text) => setState()}
                    />
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Քաղաք/գյուղ</Text>
                    <Picker
                        subtitle={'fffsdf'}

                        data={[].map((i) => i.name)}
                        style={styles.picker}
                        value={state}
                        onSelect={(text) => setState()}
                    />
                </View>


            </View>
    );
  }

export default StepOneScreen