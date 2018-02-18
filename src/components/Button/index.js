import React from 'react';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import Styles from './index.styles';

export default (Button = ({ title, type, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[Styles.container, type ? Styles[`${type}`] : {}]}>
        <Text style={[Styles.text, type ? Styles[`text_${type}`] : {}]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});
