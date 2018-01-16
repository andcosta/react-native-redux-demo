import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import GlobalStyle from '../../global/Styles';

export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: GlobalStyle.navegationBackgroundColor, height: Platform.OS === 'android' ? 70 : 90 }} />
      </View>
    );
  }
}
