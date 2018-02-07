import React, { Component } from 'react';
import { Platform, View, Text, TextInput } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../assets/fonts/icons';
import GlobalStyle from '../../../../global/Styles';
import Styles from './index.styles';

const IconCustom = createIconSetFromFontello(fontelloConfig);

export default (ParkingHeader = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.searchView}>
        <IconCustom name="search" size={20} color={GlobalStyle.navigationIconColor} style={Styles.iconCustom} />
        <TextInput
          style={Styles.textInput}
          autoCorrect={false}
          placeholder="Encontrar estacionamento"
          clearTextOnFocus={true}
          underlineColorAndroid="transparent"
          returnKeyType="search"
        />
      </View>
      <View style={Styles.profileView}>
        <IconCustom name="profile" size={30} color={GlobalStyle.navigationIconColor} />
      </View>
    </View>
  );
});
