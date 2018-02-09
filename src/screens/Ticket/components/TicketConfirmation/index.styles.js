import { Platform, StyleSheet } from 'react-native';
import GlobalStyle, { fontFamily } from '../../../../global/Styles';
import { isIphoneX } from './../../../../Helper/Platform';

export default (styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,.02)',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  backgroundView: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    margin: 3,
    paddingTop: 20
  },

  textConfirm: {
    padding: 25,
    fontFamily: 'Geomanist-Medium',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25
  }
});
