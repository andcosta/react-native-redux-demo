import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import GlobalStyle from '../../../../global/Styles';
import Styles from './index.styles';

export default (ParkingCell = () => {
  return (
    <View style={Styles.container}>
      <Text>ADICIONAR SALDO</Text>
    </View>
  );
});
