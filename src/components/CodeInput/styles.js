import {StyleSheet} from 'react-native';
import {horizontalScale} from "../../helpers/constants";

export default StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  cellRoot: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginLeft:horizontalScale(9),
    marginRight:horizontalScale(9)
  },
  cellText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#31D0DB',
    borderBottomWidth: 2,
  },
});