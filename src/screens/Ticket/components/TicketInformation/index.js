import React from 'react';
import { View, Text, Image } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../../assets/fonts/icons';
import GlobalStyle from '../../../../global/Styles';
import Button from '../../../../components/Button';
import Styles from './index.styles';

const IconCustom = createIconSetFromFontello(fontelloConfig);
const imgBarCode = require('../../images/barcode.png');

export default (TicketInformation = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.backgroundView}>
        <View style={Styles.inforTicket}>
          <View style={Styles.imageView}>
            <IconCustom name="parking" size={50} style={Styles.imageParking} />
          </View>
          <View style={Styles.descriptionView}>
            <Text style={Styles.title}>R$ 20,00</Text>
            <Text style={Styles.subTitle}>ESTACIONAMENTO</Text>
            <Text style={Styles.data}>dezembro 24, 2017 / conjunto nacional</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={imgBarCode} />
          <Text style={Styles.txtBarCode}>23452.32133 9837.8302</Text>
        </View>
        <View style={{ paddingTop: 30, paddingBottom: 20, paddingLeft: 25, paddingRight: 25 }}>
          <Button
            title="Confirmar pagamento"
            fontTitle={{ fontFamily: 'Geomanist-Medium', fontSize: 15 }}
            titleColor={'rgb(0,0,0)'}
            backgroundColor={GlobalStyle.navigationBackgroundColor}
            onPress={props.onConfirm}
          />
        </View>
        <View style={{ paddingBottom: 25, paddingLeft: 25, paddingRight: 25 }}>
          <Button
            title="Cancelar"
            fontTitle={{ fontFamily: 'Geomanist-Medium', fontSize: 15 }}
            titleColor={GlobalStyle.navigationBackgroundColor}
            backgroundColor={'transparent'}
            borderColor={GlobalStyle.navigationBackgroundColor}
            borderWidth={1}
            onPress={props.onCancel}
          />
        </View>
      </View>
    </View>
  );
});
