import React, { Component } from 'react';
import { Platform, ScrollView, View, Image, Text } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../assets/fonts/icons';
import GlobalStyle from '../../../../global/Styles';
import Styles from './index.styles';

const IconCustom = createIconSetFromFontello(fontelloConfig);

export default (ParkingCell = () => {
  //   <View style={Styles.container}>
  //   <View style={Styles.backgroundView}>
  //     <Image
  //       style={Styles.imageParking}
  //       source={{
  //         uri:
  //           'https://i.em.com.br/i-FobE-x6Q29_W73qTbh_YdQu-c=/675x/smart/imgsapp.em.com.br/app/noticia_127983242361/2017/11/29/920588/20171129135625535952o.jpg'
  //       }}
  //     />
  //     <Text style={Styles.title} numberOfLines={1}>
  //       Terraço Shopping Estacionamento
  //     </Text>
  //     <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
  //   </View>
  // </View>

  return (
    <ScrollView>
      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <View style={Styles.imageView}>
            <IconCustom name="parking" size={50} style={Styles.imageParking} />
          </View>
          <View style={Styles.descriptionView}>
            <Text style={Styles.title}>-R$ 20,00</Text>
            <Text style={Styles.subTitle}>ESTACIONAMENTO</Text>
            <Text style={Styles.data}>dezembro 24, 2017 / conjunto nacional</Text>
          </View>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <View style={Styles.imageView}>
            <IconCustom name="bank" size={50} style={Styles.imageParking} />
          </View>
          <View style={Styles.descriptionView}>
            <Text style={Styles.title}>R$ 20,00</Text>
            <Text style={Styles.subTitle}>SALDO EM PROCESSAMENTO</Text>
            <Text style={Styles.data}>processamento do boleto em 2 dias úteis</Text>
          </View>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <View style={Styles.imageView}>
            <IconCustom name="wallet" size={50} style={Styles.imageParking} />
          </View>
          <View style={Styles.descriptionView}>
            <Text style={Styles.title}>R$ 100,00</Text>
            <Text style={Styles.subTitle}>SALDO ATUAL</Text>
            <Text style={Styles.data}>dezembro 24, 2017 / conjunto nacional</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
});
