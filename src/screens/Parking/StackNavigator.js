import React from 'react';
import { StackNavigator } from 'react-navigation';

import SearchParking from './screens/SearchParking/';
import Profile from '../Profile';

const SearchParkingScreen = ({ navigation }) => <SearchParking navigation={navigation} />;
const ProfileScreen = ({ navigation }) => <Profile navigation={navigation} />;

const stackNavigator = StackNavigator({
  SearchParking: {
    screen: SearchParkingScreen,
    path: '/',
    navigationOptions: {
      header: false
    }
  },
  Profile: {
    screen: ProfileScreen,
    path: '/Profile',
    navigationOptions: ({ navigation }) => ({
      header: false
    })
  }
});

export default stackNavigator;
