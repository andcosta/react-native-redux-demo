import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyle from '../../global/Styles';

export default (NavigationHeader = props => {
  return (
    <View>
      <View
        style={{
          height: 88,
          backgroundColor: GlobalStyle.navigationBackgroundColor,
          paddingTop: 50,
          alignItems: 'center'
        }}
      >
        <Text style={{ fontFamily: 'Geomanist-Book', fontSize: 22 }}>{props.title}</Text>
      </View>
    </View>
  );
});
