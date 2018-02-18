import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GlobalStyle from '../../../../global/Styles';
import Header from './components/Header';
import ParkingCell from './components/ParkingCell';

export default class SearchParking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Button onPress={() => this.props.navigation.navigate('Profile', { name: 'Jordan' })} title="Open profile screen" />
        <ParkingCell />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.screenBackgroundColor
  }
});
