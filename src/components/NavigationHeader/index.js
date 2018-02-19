import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fonts/icons';
import GlobalStyle from '../../global/Styles';

const IconCustom = createIconSetFromFontello(fontelloConfig);

export default (NavigationHeader = ({ title, navigation, rightButton }) => {
  return (
    <View
      style={{
        height: 88,
        backgroundColor: GlobalStyle.navigationBackgroundColor,
        paddingTop: 48
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
        {navigation ? (
          <TouchableWithoutFeedback onPress={() => navigation.goBack(null)}>
            <View>
              <IconCustom name="back" size={25} color={GlobalStyle.fontColor} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{ width: 25, height: 25 }} />
        )}

        <Text style={{ fontFamily: 'Geomanist-Book', fontSize: 22, marginTop: 4 }}>{title}</Text>

        {rightButton ? (
          <TouchableWithoutFeedback onPress={() => Alert.alert('Adjust')}>
            <View>
              <IconCustom name="adjust" size={25} color={GlobalStyle.fontColor} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{ width: 20, height: 20 }} />
        )}
      </View>
    </View>
  );
});
