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

import {useNavigation} from "@react-navigation/native";
import Icon from "../../components/Icon";
import {horizontalScale, verticalScale, WINDOW_HEIGHT, WINDOW_WIDTH} from "../../helpers/constants";


export default function HomeScreen(props) {
    const {navigate, goBack} = useNavigation();



    return (
        <View style={{backgroundColor:'white',flex:1,height:WINDOW_HEIGHT}}>

            <View style={{justifyContent:'space-between',
                paddingHorizontal:horizontalScale(25),
                height:verticalScale(70),
                backgroundColor:'red',flexDirection:'row',

                alignItems:'center',width:WINDOW_WIDTH}}>
                <TouchableOpacity style={{borderRadius:verticalScale(90),height:verticalScale(45),width:verticalScale(45)}}>
                    <Image resizeMode={'cover'}  style={{borderRadius:verticalScale(90),height:verticalScale(45),width:verticalScale(45)}} height={verticalScale(45)} width={verticalScale(45)} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'}}/>
                </TouchableOpacity>

                <View style={{width:'63%',
                    flexDirection:'row',
                    alignItems:'center',
                    backgroundColor:'#D9D9D9',height:verticalScale(45)}}>
                     <TouchableOpacity>
                         <Icon icon={'search'} size={verticalScale(40)}/>
                     </TouchableOpacity>
                    <TextInput />


                </View>

                <TouchableOpacity style={{backgroundColor:'white',height:verticalScale(45),width:verticalScale(45)}}>
                    <Icon icon={'bell'} size={verticalScale(45)}/>
                </TouchableOpacity>


            </View>

        </View>
    );
  }

