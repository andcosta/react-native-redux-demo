import React from 'react';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';

export default (Button = props => {
  const title = props.title ? props.title : 'Button';
  const colorTitle = props.titleColor ? props.titleColor : 'rgb(0,0,0)';
  const fontTitle = props.fontTitle ? props.fontTitle : { fontFamily: 'Geomanist-Medium', fontSize: 15 };

  const backgroundColorButton = props.backgroundColor ? props.backgroundColor : 'rgb(100,100,50)';
  const borderColor = props.borderColor ? props.borderColor : 'rgb(0,0,0)';
  const borderWidth = props.borderWidth ? props.borderWidth : 0;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          backgroundColor: backgroundColorButton,
          borderColor: borderColor,
          borderWidth: borderWidth,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{ color: colorTitle, fontFamily: fontTitle.fontFamily, fontSize: fontTitle.fontSize }}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});
