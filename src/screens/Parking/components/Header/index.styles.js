import { Platform, StyleSheet } from 'react-native';
import GlobalStyle from '../../../../global/Styles';
import { isIphoneX } from './../../../../Helper/Platform';

export default (styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? 70 : isIphoneX() ? 90 : 80,
    backgroundColor: GlobalStyle.navigationBackgroundColor,
    paddingTop: Platform.OS === 'android' ? 5 : isIphoneX() ? 30 : 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  searchView: {
    flex: 1,
    backgroundColor: GlobalStyle.buttonLightBackgroundColor,
    marginLeft: 20,
    marginRight: 10,
    height: 35,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginRight: 10,
    marginTop: 3,
    fontFamily: 'Geomanist-ExtraLight',
    fontSize: 16
  },

  iconCustom: {
    margin: 10
  },

  profileView: {
    width: 60,
    alignItems: 'center'
  }
}));
