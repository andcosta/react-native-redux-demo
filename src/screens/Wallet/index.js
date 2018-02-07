import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../global/Styles';
import Header from './components/Header';
import ParkingCell from './components/WalletCell';

export default class Wallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ParkingCell />
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
