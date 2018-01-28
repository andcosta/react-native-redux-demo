import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import GlobalStyle from '../../global/Styles';
import Styles from './index.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FeedHeader extends Component {
  render() {
    return (
      <View>
        <View style={Styles.container}>
          <Text style={{ fontFamily: GlobalStyle.fontFamily, color: GlobalStyle.fontColor, fontSize: 12 }}>Saldo disponível</Text>
          <Text style={{ fontFamily: GlobalStyle.fontFamily, color: GlobalStyle.fontColor, fontSize: 39 }}>R$ 247,20</Text>

          <View style={Styles.button}>
            <Icon name="plus-circle" size={15} color={GlobalStyle.fontColor} />
            <Text style={{ marginLeft: 5, fontSize: 10, fontFamily: GlobalStyle.fontFamily, color: GlobalStyle.fontColor }}>
              ADICIONAR SALDO
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
