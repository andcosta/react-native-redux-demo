import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../global/Styles';

export default class Ticket extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              height: 88,
              backgroundColor: GlobalStyle.navigationBackgroundColor,
              paddingTop: 47,
              alignItems: 'center'
            }}
          >
            <Text style={{ fontFamily: 'Helvetica-Light', fontSize: 22 }}>Profile</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.welcome}>Parking</Text>
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
