import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import { constants, default as Camera } from 'react-native-camera';
import GlobalStyle from '../../global/Styles';
import Styles from './index.styles';
import NavigationHeader from '../../components/NavigationHeader';
import TicketInformation from './components/TicketInformation';
import TicketConfirmation from './components/TicketConfirmation';

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
      showQRCode: true,
      showTicketInformation: false,
      showTicketConfirmation: false
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavigationHeader title="Ticket" />

        {this.state.showQRCode ? (
          <View style={Styles.cameraView}>
            <View style={{ width: 300, height: 380 }}>
              <Camera
                ref={cam => {
                  this.camera = cam;
                }}
                style={Styles.preview}
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
                <View style={Styles.cameraQRCodeMaskWrapper}>
                  <Image style={Styles.cameraQRCodeMask} resizeMode="stretch" source={qrcodeMask} />
                </View>
              </Camera>
              <Text style={Styles.infoText}>Para iniciar o pagamento, posicione o código do seu ticket no leitor acima.</Text>
            </View>
          </View>
        ) : null}

        <View style={Styles.ticketInformationView}>
          {this.state.showTicketInformation ? (
            <TicketInformation onConfirm={this._onConfirmTicketInformation.bind(this)} onCancel={this._onCancelTicketInformation.bind(this)} />
          ) : null}

          {this.state.showTicketConfirmation ? <TicketConfirmation onBack={this._onBackTicketConfirmation.bind(this)} /> : null}
        </View>
      </View>
    );
  }

  _onEnableCamera() {
    this.setState({ showQRCode: true });
  }

  _onConfirmTicketInformation() {
    this.setState({ showTicketInformation: false });
    this.setState({ showTicketConfirmation: true });
    this.setState({ showQRCode: false });
  }

  _onCancelTicketInformation() {
    this.setState({ showTicketInformation: false });
    this.setState({ showTicketConfirmation: false });
    this.setState({ showQRCode: true });
  }

  _onBackTicketConfirmation() {
    this.setState({ showTicketInformation: false });
    this.setState({ showTicketConfirmation: false });
    this.setState({ showQRCode: true });
  }

  _onBarCodeRead(e) {
    // this.props.navigation.navigate('AuthTempPassword', {
    //   typeQRcode: e.type,
    //   dataQRcode: e.data
    // });

    this.setState({ showTicketInformation: true });
    this.setState({ showQRCode: false });
  }
}
