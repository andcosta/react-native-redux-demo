import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../global/Styles';

export default (styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? 125 : 150,
    backgroundColor: GlobalStyle.navegationBackgroundColor,
    paddingTop: Platform.OS === 'android' ? 10 : 40,
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    height: 20,
    backgroundColor: GlobalStyle.buttonLightBackgroundColor,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 150,
    borderRadius: 14
  }
}));
