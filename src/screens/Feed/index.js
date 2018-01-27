import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../global/Styles';
import FeedHeader from '../../components/FeedHeader';

export default class Feed extends Component {
  render() {
    console.log('teste');

    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.screenBackgroundColor }}>
        <StatusBar backgroundColor={GlobalStyle.navegationBackgroundColor} barStyle="dark-content" />
        <FeedHeader />
        <Text style={styles.welcome}>Feed 2</Text>
        <Button onPress={onPressLearnMore} title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button" />
      </View>
    );
  }
}

const onPressLearnMore = () => {
  console.log('teste');
};

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
