import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from "../../helpers/constants";

export default StyleSheet.create({


  textInputTitle:{
    fontFamily:'arial',
    fontSize:verticalScale(24),

  },

  phoneInputStyle:{
    backgroundColor:'white',
    height:verticalScale(69),
    // borderBottomColor:'#999999',
    paddingTop:verticalScale(15)



  },

  phoneContainerStyle:{
    height:verticalScale(70),
    backgroundColor:'white',
    width:horizontalScale(360),
    borderBottomColor:'#999999',
    borderBottomWidth:0.5,
    marginBottom:verticalScale(20),
    zIndex:3

  },
  codeTextStyle:{
    backgroundColor:'white',
    fontSize:verticalScale(24),
    color:'black'

  },
  textContainerStyle:{
    height:verticalScale(70),
    backgroundColor:'white',
    fontSize:verticalScale(24),
    borderBottomColor:'#999999',
    borderBottomWidth:0.5,
  },

});
