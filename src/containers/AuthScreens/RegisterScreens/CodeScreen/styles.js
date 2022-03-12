import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from "../../../../helpers/constants";
// import {Colors} from '../../../helpers/helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    flexDirection: 'column',
    paddingTop:verticalScale(75)


  },
  textInput:{
    borderBottomColor:'#999999',
    borderBottomWidth:0.5,
    width:horizontalScale(360),
    fontSize:verticalScale(20),
    fontFamily:'Arial',
    height:verticalScale(60)

  },

  textInputContainer:{
    marginBottom:verticalScale(15)
  },


  textInputTitle:{
    fontFamily:'arial',
    fontSize:verticalScale(22),
    top:verticalScale(10)

  },
  phoneInputStyle:{
    backgroundColor:'white',
    height:verticalScale(70),
    // borderBottomColor:'#999999',
    // borderBottomWidth:0.5,
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
  topContainer:{
    height:verticalScale(100)
  },
  forgetContainer:{
    alignSelf:'flex-end',
    marginRight:horizontalScale(25)
  },
  forgetText:{
    color:'black',
    fontFamily:'arial',
    fontSize:verticalScale(18),

  },
  loginButton:{
    width:horizontalScale(360),
    height:verticalScale(70),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#967CE6',
    position: 'absolute',
    bottom: verticalScale(80)


  },
  loginText:{
    fontFamily:'arial',
    fontSize:verticalScale(24),
    color:'white'
  },
  signUpContainer:{
    position: 'absolute',
    bottom: verticalScale(40),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  },
  signUpText:{
    color:'black',
    fontFamily:'arial',
    fontSize:verticalScale(20),
  },
  registerText:{
    color:'#967CE6',
    fontFamily:'arial',
    fontSize:verticalScale(20),
  },
  registerButton:{
    marginLeft:horizontalScale(7)
  },
  headerTextSmall:{
    color:'#666666',
    fontFamily:'arial',
    fontSize:verticalScale(18),
    textAlign:'center',
    width:horizontalScale(250)
  },
  notGetSms:{
    color:'black',
    fontFamily:'arial',
    fontSize:verticalScale(18),
    textAlign:'center',
    position: 'absolute',
    bottom: verticalScale(170)
    // width:horizontalScale(250)
  },
  headerTextBig:{
    color:'black',
    fontFamily:'arial',
    fontSize:verticalScale(24),
    fontWeight:"bold",
    textAlign:'center'
  },
  headerTextSmallPink:{
    color:'#967CE6',
    fontFamily:'arial',
    fontSize:verticalScale(18),
    textAlign:'center'
  },
  sendAgain:{
    color:'#31D0DB',
    fontFamily:'arial',
    fontSize:verticalScale(18),
    textAlign:'center'
  },
  smsContainer:{
    flexDirection:'row'
    ,alignItems:'center',

  }
});
