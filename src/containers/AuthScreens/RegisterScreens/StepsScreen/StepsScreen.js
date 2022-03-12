import * as React from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, Animated, Image, Easing
} from 'react-native';
import styles from './styles';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native";


import {horizontalScale, verticalScale} from "../../../../helpers/constants";
import AntDesign from "react-native-vector-icons/AntDesign";
import StepOneScreen from "../../../../components/Steps/StepOneScreen";
import StepTwoScreen from "../../../../components/Steps/StepTwoScreen";
import StepThreeScreen from "../../../../components/Steps/StepThreeScreen";

export default function StepsScreen(props) {
    const {navigate, goBack} = useNavigation();

    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const [currentStep,setCurrentStep] = useState(1)
    const [currentScaleX,setCurrenScaleX] = useState(1)
    const [leftPosition,setLeftPosition] = useState(new Animated.Value (currentStep===1?-horizontalScale(140):horizontalScale(80)))

    const stopAnimation = () => {
        setLeftPosition(leftPosition)

    }
    const moveLR =()=>{
        Animated.timing(
            leftPosition,
            {
                toValue: horizontalScale(80),
                duration: 1000, // the duration of the animation
                easing: Easing.linear, // the style of animation
            }
        ).start() // starts this annimation once this method is called
        setCurrenScaleX(1)
    }

    const moveRL =  () =>{
        Animated.timing(
            leftPosition,
            {
                toValue: -horizontalScale(80),
                duration: 1000, // the duration of the animation
                easing: Easing.linear, // the style of animation

            }
        ).start() // starts this annimation once this method is called
        setCurrenScaleX(-1)
    }




    const renderItem = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepOneScreen

                    />
                );
            case 2:
                return (
                    <StepTwoScreen

                    />
                );
            case 3:
                return <StepThreeScreen />;

            default:
                return null;
        }
    };



    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                {currentStep!==3 &&
                 <Animated.View style={[styles.imageView, {
                     left:leftPosition,
                     transform: [
                         { scaleX: currentScaleX }
                     ]
                 },]}>
                    <Image style={{height: horizontalScale(210)}} width={horizontalScale(270)} height={horizontalScale(270)} resizeMode={'contain'}
                           source={require('./icons/tati.png')}/>
                 </Animated.View>
}
                <View >
                    {renderItem()}
                </View>


                <View style={styles.bottomContainer}>

                    <TouchableOpacity onPress={()=>{
                        currentStep!==3?moveRL():null
                        currentStep===1?goBack():setCurrentStep(currentStep-1)
                        }} style={styles.leftButtonContainer}>
                        <AntDesign name={'arrowleft'} color={'white'} size={verticalScale(30)}/>
                    </TouchableOpacity>
                    <View style={styles.threeDotsContainer}>
                        <View style={[styles.dot,{backgroundColor: currentStep===1? '#20BDC8':'#999999'}]}/>
                        <View style={[styles.dot,{backgroundColor: currentStep===2? '#20BDC8':'#999999'}]}/>
                        <View style={[styles.dot,{backgroundColor: currentStep===3? '#20BDC8':'#999999'}]}/>
                    </View>

                    <TouchableOpacity onPress={()=>{
                        if(currentStep===3){
                            navigate('InterestsScreen')
                        }
                        else{
                            moveLR()
                            setCurrentStep(currentStep+1)

                        }


                    }} style={styles.buttonContainer}>
                        <AntDesign name={'arrowright'} color={'white'} size={verticalScale(30)}/>
                    </TouchableOpacity>

                </View>



            </View>
        </TouchableWithoutFeedback>
    );
  }

