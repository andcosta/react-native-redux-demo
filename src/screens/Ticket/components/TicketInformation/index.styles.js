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

  inforTicket: {
    flexDirection: 'row'
  },

  txtBarCode: {
    fontFamily: 'Geomanist-regular',
    fontSize: 17,
    marginTop: 10,
    color: 'rgb(0,0,0)'
  },

  imageView: {
    height: 80,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageParking: {
    backgroundColor: 'transparent',
    color: 'rgb(149,152,154)'
  },

  title: {
    backgroundColor: 'transparent',
    fontFamily: 'Geomanist-bold',
    fontSize: 25,
    marginBottom: 5,
    color: 'rgb(121,129,139)'
  },

  subTitle: {
    backgroundColor: 'transparent',
    fontFamily: 'Geomanist-regular',
    fontSize: 15,
    marginBottom: 5,
    color: 'rgb(121,129,139)'
  },

  data: {
    backgroundColor: 'transparent',
    fontFamily: 'Geomanist-regular',
    fontSize: 12,
    marginBottom: 5,
    color: 'rgb(121,129,139)'
  }
});
