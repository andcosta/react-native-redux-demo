import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import GlobalStyle from '../../global/Styles';
import Styles from './index.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isIphoneX } from './../../Helper/Platform';

export default (FeedHeader = () => {
  let showStatusBar = true;
  if (Platform.OS === 'android' || isIphoneX()) showStatusBar = false;

  return (
    <View>
      <View>
        {showStatusBar ? <View style={{ height: 23, backgroundColor: GlobalStyle.navigationDarkBackgroundColor }} /> : null}
        {isIphoneX() ? <View style={{ height: 27, backgroundColor: GlobalStyle.navigationBackgroundColor }} /> : null}

        <View style={Styles.container}>
          <Text style={{ fontFamily: 'Geomanist-Medium', color: GlobalStyle.fontColor, fontSize: 12, paddingBottom: 7 }}>Saldo disponível</Text>
          <Text style={{ fontFamily: 'Geomanist-ExtraLight', color: GlobalStyle.fontColor, fontSize: 39 }}>R$ 247,20</Text>

          <View style={Styles.button}>
            <Icon name="plus-circle" size={15} color={GlobalStyle.fontColor} />
            <Text style={{ marginLeft: 5, fontSize: 11, fontFamily: GlobalStyle.fontFamily, color: GlobalStyle.fontColor, paddingTop: 2 }}>
              ADICIONAR SALDO
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
});
