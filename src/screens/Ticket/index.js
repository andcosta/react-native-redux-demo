import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-camera';
import GlobalStyle from '../../global/Styles';

export default class Ticket extends Component {
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
          <View style={{ width: 200, height: 200 }}>
            <Camera
              ref={cam => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
            >
              <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                [CAPTURE]
              </Text>
            </Camera>
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
  }
});
