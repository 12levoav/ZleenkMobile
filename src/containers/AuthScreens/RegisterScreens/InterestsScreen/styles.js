import {StyleSheet, Dimensions, Platform} from 'react-native';
import {horizontalScale, verticalScale} from "../../../../helpers/constants";


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    flexDirection: 'column',
    paddingTop:verticalScale(75)
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: Platform.select({
      android: 50,
    }),
    alignItems: 'center',
  },
  message: {},
  selectedCity: {
    marginTop: 15,
    fontSize: 12,
    maxWidth: '80%',
    textAlign: 'center',
  },
  topContainer:{
    height:verticalScale(100)
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
  flatListView:{
    height:verticalScale(520),
  },
  bubbleContainer:{
    maxHeight:horizontalScale(142),
    maxWidth:horizontalScale(142),
    minHeight:horizontalScale(80),
    minWidth:horizontalScale(80),
    margin:horizontalScale(5),
    justifyContent:'center',
    alignItems:'center',
    zIndex:99

  },
  bubbleView:{
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    maxHeight:horizontalScale(150),
    maxWidth:horizontalScale(150),
    minHeight:horizontalScale(90),
    minWidth:horizontalScale(90),
    zIndex:99


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
    right:horizontalScale(140) ,
    zIndex:3,
    alignItems:'center',
    justifyContent:'center'

  },
  bottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    zIndex:4,
    bottom:verticalScale(140)

  },


});
