import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import GlobalStyle from '../../global/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FeedHeader extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 150,
            backgroundColor: GlobalStyle.navegationBackgroundColor,
            paddingTop: 40,
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontFamily: 'Helvetica Neue', fontSize: 12 }}>Saldo disponível</Text>
          <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 39 }}>R$ 247,20</Text>

          <View
            style={{
              height: 20,
              backgroundColor: GlobalStyle.buttonLightBackgroundColor,
              marginTop: 7,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 28,
              width: 150,
              borderRadius: 14
            }}
          >
            <Icon name="plus-circle" size={15} color="black" />
            <Text style={{ marginLeft: 5, fontFamily: 'Helvetica Neue', fontSize: 10 }}>ADICIONAR SALDO</Text>
          </View>
        </View>
      </View>
    );
  }
}
