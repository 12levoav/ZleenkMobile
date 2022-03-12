import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, WINDOW_HEIGHT} from "../../helpers/constants";

export default StyleSheet.create({
    containerStyle:{
        minHeight:verticalScale(300),
        maxHeight:WINDOW_HEIGHT - verticalScale(120),
        width:horizontalScale(350),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:20,
        paddingVertical:verticalScale(30)
    },
    titleStyle:{
        fontFamily:'arial',
        color:'black',
        fontSize:18,
        width:horizontalScale(200),
        marginBottom:verticalScale(20),
        alignSelf:'center',
        textAlign:'center'
    },
    descriptionStyle:{
        fontFamily:'arial',
        color:'black',
        fontSize:14,
        width:horizontalScale(300),
        textAlign:'center',
        marginBottom:verticalScale(20)

    },
    acceptButton:{
        height:verticalScale(70),
        width:horizontalScale(300),
        backgroundColor:'#967CE6',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:verticalScale(5)

}   ,
    acceptText:{
        fontFamily:'arial',
        color:'white',
        fontSize:17,

    },
    rejectText:{
        fontFamily:'arial',
        color:'#967CE6',
        fontSize:14,
        alignSelf:'center'

    }
});