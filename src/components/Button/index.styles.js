import { Platform, StyleSheet } from 'react-native';
import GlobalStyle from '../../global/Styles';

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.navigationBackgroundColor,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  outline: {
    backgroundColor: 'transparent',
    borderColor: GlobalStyle.navigationBackgroundColor,
    borderWidth: 1
  },

  text: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Geomanist-Medium',
    fontSize: 15
  },

  text_outline: {
    color: GlobalStyle.navigationBackgroundColor
  }
}));
