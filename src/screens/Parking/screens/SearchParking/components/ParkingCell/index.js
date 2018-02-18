import React, { Component } from 'react';
import { Platform, ScrollView, View, Image, Text } from 'react-native';
import GlobalStyle from '../../../../../../global/Styles';
import Styles from './index.styles';

export default (ParkingCell = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <Image
            style={Styles.imageParking}
            source={{
              uri:
                'https://i.em.com.br/i-FobE-x6Q29_W73qTbh_YdQu-c=/675x/smart/imgsapp.em.com.br/app/noticia_127983242361/2017/11/29/920588/20171129135625535952o.jpg'
            }}
          />
          <Text style={Styles.title} numberOfLines={1}>
            Terraço Shopping Estacionamento
          </Text>
          <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <Image
            style={Styles.imageParking}
            source={{
              uri:
                'https://s.yimg.com/ny/api/res/1.2/gBpNKbXuzr4IwFP1leEDOQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://globalfinance.zenfs.com/en_us/News/Reuters/ba879937fa3ff00851bbe3141fd77b8d'
            }}
          />
          <Text style={Styles.title} numberOfLines={1}>
            Terraço Shopping Estacionamento
          </Text>
          <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <Image
            style={Styles.imageParking}
            source={{
              uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/73/f2/47/no-estacionamento.jpg'
            }}
          />
          <Text style={Styles.title} numberOfLines={1}>
            Terraço Shopping Estacionamento
          </Text>
          <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <Image
            style={Styles.imageParking}
            source={{
              uri:
                'https://www.ultraparkgru.com.br/dicas-de-viagem/wp-content/uploads/2017/10/qual-o-melhor-estacionamento-no-aeroporto-guarulhos.jpg'
            }}
          />
          <Text style={Styles.title} numberOfLines={1}>
            Terraço Shopping Estacionamento
          </Text>
          <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <Image
            style={Styles.imageParking}
            source={{
              uri: 'http://www.macapashopping.com/img_loja/estacionamento.jpg'
            }}
          />
          <Text style={Styles.title} numberOfLines={1}>
            Terraço Shopping Estacionamento
          </Text>
          <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <Image
            style={Styles.imageParking}
            source={{
              uri:
                'https://i.em.com.br/i-FobE-x6Q29_W73qTbh_YdQu-c=/675x/smart/imgsapp.em.com.br/app/noticia_127983242361/2017/11/29/920588/20171129135625535952o.jpg'
            }}
          />
          <Text style={Styles.title} numberOfLines={1}>
            Terraço Shopping Estacionamento
          </Text>
          <Text style={Styles.subTitle}>Octogonal - Cruzeiro / Sudoeste / Octogonal, Brasília - DF, 70297-400</Text>
        </View>
      </View>
    </ScrollView>
  );
});
