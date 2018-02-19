import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import GlobalStyle from '../../../../global/Styles';
import NavigationHeader from '../../../../components/NavigationHeader';

export default class ParkingDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader title="Parking Detail" navigation={this.props.navigation} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.welcome}>PARKING DETAIL</Text>
          <Button onPress={() => this.props.navigation.navigate('ParkingDetail')} title="Nova tela" />
          <Button onPress={() => this.props.navigation.goBack(null)} title="Voltar" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.screenBackgroundColor
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
