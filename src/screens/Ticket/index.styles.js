import { StyleSheet, Dimensions } from 'react-native';
import GlobalStyle from '../../global/Styles';

export default (Styles = {
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.screenBackgroundColor
  },
  cameraView: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  ticketInformationView: {
    flex: 1,
    paddingTop: 40
  },
  infoText: {
    fontSize: 20,
    marginTop: 35,
    fontFamily: 'Geomanist-Regular',
    fontSize: 18,
    lineHeight: 22,
    color: 'rgb(0, 0, 0)'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraQRCodeMaskWrapper: {
    padding: 20
  },
  cameraQRCodeMask: {
    flex: 1,
    width: Dimensions.get('window').width - 120,
    height: 400
  }
});
