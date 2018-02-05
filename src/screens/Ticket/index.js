import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import { constants, default as Camera } from 'react-native-camera';
import GlobalStyle from '../../global/Styles';

const marginImage1 = 30;
const marginImage2 = 40;

const qrcodeMask = require('./qrcodeMask.png');
const iconQRCode = require('./iconQRCode.png');

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
      habilitarQRCode: 0,
      QRCode: '',
      isEnableDevice: false
    };
  }

  _onEnableDevice() {
    this.setState({ isEnableDevice: true });
  }

  _onBarCodeRead(e) {
    console.log('qrcode', e);

    // this.props.navigation.navigate('AuthTempPassword', {
    //   typeQRcode: e.type,
    //   dataQRcode: e.data
    // });

    Alert.alert(`qrcode:  ${e}`);

    this.setState({ isEnableDevice: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              height: 88,
              backgroundColor: GlobalStyle.navigationBackgroundColor,
              paddingTop: 47,
              alignItems: 'center'
            }}
          >
            <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 22 }}>Ticket</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{ width: 300, height: 300 }}>
            {(this.state.isEnableDevice && (
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
            )) || (
              <TouchableWithoutFeedback onPress={() => this._onEnableDevice()}>
                <View style={styles.QRIconsWrapper} />
              </TouchableWithoutFeedback>
            )}

            {(this.state.isEnableDevice && (
              <View style={styles.buttonEnableDevice}>
                <Text style={styles.buttonEnableDeviceTitle}>Caso haja algum problema, reinicie o aplicativo</Text>
              </View>
            )) || (
              <TouchableWithoutFeedback onPress={() => this._onEnableDevice()}>
                <View style={styles.buttonDisableDevice}>
                  <Text style={styles.buttonDisableTitle}>HABILITAR DISPOSITIVO</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
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
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconQRCode: {
    width: 200,
    height: 200
  },
  iconQRCODEMask: {
    flex: 1,
    width: Dimensions.width - marginImage1
  },
  iconQRCodeMaskWrapper: {
    flex: 1,
    padding: marginImage2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  QRIconsWrapper: {
    flex: 1,
    padding: marginImage1,
    width: Dimensions.get('window').width
  },
  cameraQRCodeMaskWrapper: {
    flex: 1,
    padding: marginImage1,
    width: Dimensions.get('window').width
  },
  cameraQRCodeMask: {
    flex: 1,
    width: Dimensions.width - marginImage1
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
