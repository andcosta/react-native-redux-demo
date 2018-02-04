import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../global/Styles';
import { isIphoneX } from './../../Helper/Platform';

export default (styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? 140 : 135,
    backgroundColor: GlobalStyle.navigationBackgroundColor,
    paddingTop: Platform.OS === 'android' ? 10 : isIphoneX() ? 16 : 13,
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    height: 20,
    backgroundColor: GlobalStyle.buttonLightBackgroundColor,
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 150,
    borderRadius: 14
  }
}));
