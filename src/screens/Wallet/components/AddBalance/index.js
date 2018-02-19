import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import GlobalStyle from '../../../../global/Styles';

export default (AddBalance = ({ closeModal }) => {
  return (
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
      <TouchableWithoutFeedback onPress={closeModal}>
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
  );
});
