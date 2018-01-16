import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../global/Styles';
import Header from '../../components/Header';

export default class Feed extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={GlobalStyle.navegationBackgroundColor} barStyle="light-content" />
        <Header />
        <Text style={styles.welcome}>Feed 6</Text>
        <Icon name="rocket" size={100} color="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
