import React, { Component } from 'react';
import { Platform, View, Text, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../assets/fonts/icons';
import GlobalStyle from '../../../../global/Styles';
import Styles from './index.styles';
import { isIphoneX } from './../../../../Helper/Platform';

const IconCustom = createIconSetFromFontello(fontelloConfig);

export default (FeedHeader = ({ openModal }) => {
  let showStatusBar = true;
  if (Platform.OS === 'android' || isIphoneX()) showStatusBar = false;

  return (
    <View>
      <View>
        {showStatusBar ? <View style={{ height: 23, backgroundColor: GlobalStyle.navigationDarkBackgroundColor }} /> : null}
        {isIphoneX() ? <View style={{ height: 27, backgroundColor: GlobalStyle.navigationBackgroundColor }} /> : null}

        <View style={Styles.container}>
          <Text
            style={{
              fontFamily: 'Geomanist-Medium',
              color: GlobalStyle.fontColor,
              fontSize: 12,
              paddingBottom: Platform.OS === 'android' ? 0 : 7,
              textAlign: 'center'
            }}
          >
            Saldo disponível
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
            <View style={{ width: 30, height: 30 }} />
            <Text style={{ fontFamily: 'Geomanist-ExtraLight', color: GlobalStyle.fontColor, fontSize: 50 }}>R$ 247,20</Text>

            <TouchableWithoutFeedback onPress={() => Alert.alert('Adjust')}>
              <View style={{ padding: 8 }}>
                <IconCustom name="adjust" size={25} color={GlobalStyle.fontColor} />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback onPress={() => openModal()}>
              <View style={Styles.button}>
                <IconCustom name="wallet" size={15} color={GlobalStyle.fontColor} />
                <Text style={{ marginLeft: 5, fontSize: 11, fontFamily: GlobalStyle.fontFamily, color: GlobalStyle.fontColor, paddingTop: 2 }}>
                  ADICIONAR SALDO
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
});
