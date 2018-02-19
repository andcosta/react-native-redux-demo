import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import GlobalStyle from '../../global/Styles';
import Header from './components/Header';
import WalletCell from './components/WalletCell';

let sibling;

export default class Wallet extends Component {
  _openModal = () => {
    sibling = new RootSiblings(
      (
        <View
          style={{
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: GlobalStyle.navigationBackgroundColor,
            opacity: 0.9
          }}
        >
          <TouchableWithoutFeedback onPress={() => this._closeModal()}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      )
    );
  };

  _closeModal = () => {
    sibling.destroy();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header openModal={this._openModal.bind(this)} />
        <WalletCell />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.screenBackgroundColor
  }
});
