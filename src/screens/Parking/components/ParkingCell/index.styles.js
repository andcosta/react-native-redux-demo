import { Platform, StyleSheet } from 'react-native';
import GlobalStyle, { fontFamily } from '../../../../global/Styles';
import { isIphoneX } from './../../../../Helper/Platform';

export default (styles = StyleSheet.create({
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
    overflow: 'hidden'
  },

  imageParking: {
    backgroundColor: 'rgb(240,240,240)',
    height: 80,
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },

  title: {
    backgroundColor: 'transparent',
    fontFamily: 'Geomanist-bold',
    fontSize: 18,
    margin: 10,
    color: 'rgb(0,0,0)'
  },

  subTitle: {
    backgroundColor: 'transparent',
    fontFamily: 'Geomanist-regular',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: 'rgb(121,129,139)'
  }
}));
