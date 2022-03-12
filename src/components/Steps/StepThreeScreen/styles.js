import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from "../../../helpers/constants";
// import {Colors} from '../../../helpers/helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    flexDirection: 'column',
    paddingTop:verticalScale(75)

  },
  topContainer:{
    height:verticalScale(150)
  },
  headerTextSmall:{
    color:'#666666',
    fontFamily:'arial',
    fontSize:verticalScale(18),
    textAlign:'center'
  },
  headerTextBig:{
    color:'black',
    fontFamily:'arial',
    fontSize:verticalScale(24),
    fontWeight:"bold"
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
  picker:{
    width:horizontalScale(360),

  },
  bottomContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  threeDotsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  dot:{
    height:verticalScale(15),
    width:verticalScale(15),
    borderRadius:verticalScale(30),
    backgroundColor:'#999999',
    marginRight:horizontalScale(5)
  },
  buttonContainer:{
    height:verticalScale(90),
    width:verticalScale(90),
    borderRadius:verticalScale(180),
    backgroundColor:'#9D7CE6',
    position:'absolute',
    bottom:-verticalScale(90),
    left:horizontalScale(140),
    zIndex:3,
    alignItems:'center',
    justifyContent:'center'

  },
  leftButtonContainer:{
    height:verticalScale(90),
    width:verticalScale(90),
    borderRadius:verticalScale(180),
    backgroundColor:'#9D7CE6',
    position:'absolute',
    bottom:-verticalScale(90),
    right:horizontalScale(140),
    zIndex:3,
    alignItems:'center',
    justifyContent:'center'

  },
  imageView:{
    bottom: horizontalScale(23),
    right: horizontalScale(20),
    height: horizontalScale(210)
  },
  imageTouch:{
    marginTop:verticalScale(100)
  }



});
