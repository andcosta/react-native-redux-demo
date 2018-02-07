import { Platform, StyleSheet } from 'react-native';
import GlobalStyle from '../../../../global/Styles';
import { isIphoneX } from './../../../../Helper/Platform';

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255,255)',
    borderRadius: 10,
    height: 50,
    margin: 10

    //shadowcolor
  }
}));
