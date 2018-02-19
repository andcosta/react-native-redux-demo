import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SearchParking from './screens/SearchParking/';
import Profile from '../Profile';

const SearchParkingScreen = ({ navigation }) => <SearchParking navigation={navigation} />;
const ProfileScreen = ({ navigation }) => <Profile navigation={navigation} />;

const StackNav = StackNavigator({
  SearchParking: {
    screen: SearchParkingScreen,
    navigationOptions: {
      header: false
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: false
    }
  }
});

export default class Parking extends Component {
  render() {
    return <StackNav />;
  }
}
