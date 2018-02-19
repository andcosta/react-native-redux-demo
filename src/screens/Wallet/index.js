import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import GlobalStyle from '../../global/Styles';
import Header from './components/Header';
import WalletCell from './components/WalletCell';
import AddBalance from './components/AddBalance';

let modal;

export default class Wallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header openModal={this._openModal.bind(this)} />
        <WalletCell />
      </View>
    );
  }

  _openModal = () => {
    modal = new RootSiblings(<AddBalance closeModal={this._closeModal.bind(this)} />);
  };

  _closeModal = () => {
    modal.destroy();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.screenBackgroundColor
  }
});
