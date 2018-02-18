import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import GlobalStyle from '../../global/Styles';

export default class Ticket extends Component {
  constructor(props) {
    super(props);
  }

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
            <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.welcome}>getModel</Text>
          <Button onPress={() => this.props.navigation.navigate('Profile')} title="Open profile screen" />
          <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
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
