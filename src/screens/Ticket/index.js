import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import { constants, default as Camera } from 'react-native-camera';
import GlobalStyle from '../../global/Styles';
import Styles from './index.styles';
import NavigationHeader from '../../components/NavigationHeader';
import TicketInformation from './components/TicketInformation';

const marginImage1 = 60;
const qrcodeMask = require('./images/qrcodeMask.png');

export default class Ticket extends Component {
  constructor(props) {
    super(props);

    this.camera = null;
    this._onBarCodeRead = this._onBarCodeRead.bind(this);

    this.state = {
      camera: {
        aspect: constants.Aspect.fill,
        captureTarget: constants.CaptureTarget.temp,
        type: constants.Type.back,
        orientation: constants.Orientation.auto,
        flashMode: constants.FlashMode.auto
      },
      showQRCode: false,
      showTicketInformation: true
    };
  }

  _onEnableDevice() {
    this.setState({ showQRCode: true });
  }

  _onBarCodeRead(e) {
    console.log('qrcode', e);

    // this.props.navigation.navigate('AuthTempPassword', {
    //   typeQRcode: e.type,
    //   dataQRcode: e.data
    // });

    Alert.alert(`qrcode:  ${e}`);

    this.setState({ showQRCode: false });
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavigationHeader title="Ticket" />
        <View style={Styles.baseView}>
          {this.state.showQRCode ? (
            <View style={{ width: 300, height: 380 }}>
              <Camera
                ref={cam => {
                  this.camera = cam;
                }}
                style={styles.preview}
                aspect={this.state.camera.aspect}
                captureTarget={this.state.camera.captureTarget}
                type={this.state.camera.type}
                flashMode={this.state.camera.flashMode}
                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                defaultTouchToFocus
                mirrorImage={false}
                onBarCodeRead={this._onBarCodeRead}
              >
                <View style={styles.cameraQRCodeMaskWrapper}>
                  <Image style={styles.cameraQRCodeMask} resizeMode="stretch" source={qrcodeMask} />
                </View>
              </Camera>
              <Text style={styles.infoText}>Para iniciar o pagamento, posicione o código do seu ticket no leitor acima.</Text>
            </View>
          ) : null}
          {this.state.showTicketInformation ? <TicketInformation /> : null}
        </View>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({
        metadata: options
      })
      .then(data => {
        console.log('data');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.screenBackgroundColor
  },
  infoText: {
    fontSize: 20,
    marginTop: 35,
    fontFamily: 'Geomanist-Regular',
    fontSize: 18,
    lineHeight: 22,
    color: 'rgb(0, 0, 0)'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },

  containerTutorialTitle: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  containerTutorialImage: {
    flex: 2.5,
    justifyContent: 'space-between'
  },

  containerTutorial: {
    backgroundColor: 'rgb(247, 247, 247)',
    flex: 2.5,
    paddingTop: 14,
    paddingRight: 20,
    paddingBottom: 14,
    paddingLeft: 20
  },
  containerTutorialContent: {
    minHeight: 150
  },
  instructorContainer: {
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },
  containerTutorialText: {
    color: 'rgb(38, 50, 5)',
    fontSize: 15
  },
  containerTutorialTextBold: {
    color: 'rgb(38, 50, 5)',
    fontSize: 15,
    fontWeight: '600'
  },

  buttonEnableDevice: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  buttonEnableDeviceTitle: {
    color: '#0F5CA4',
    //fontFamily: 'Geomanist-Book',
    fontSize: 14,
    textAlign: 'center'
  },

  buttonDisableDevice: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F5CA4'
  },

  buttonQRCode: {
    alignSelf: 'flex-end'
  },

  buttonDisableTitle: {
    color: 'white',
    //fontFamily: 'Geomanist-Book',
    fontSize: 16,
    fontWeight: 'bold'
  },

  cameraQRCodeMaskWrapper: {
    padding: 20
  },
  cameraQRCodeMask: {
    flex: 1,
    width: Dimensions.get('window').width - 120,
    height: 400
  },
  hideTextInputWrapper: {
    flexDirection: 'row'
  },
  hideTextInput: {
    color: 'black',
    width: 250
  },
  line: {
    backgroundColor: 'rgba(69, 90, 100, 0.24)',
    height: 1
  }
});
