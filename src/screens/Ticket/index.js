import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ticket extends Component {
  static navigationOptions = {
    title: 'Title',
    header: {
      title: 'Title',
      style: {
        backgroundColor: 'red'
      },
      tintColor: 'red'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ticket</Text>
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
