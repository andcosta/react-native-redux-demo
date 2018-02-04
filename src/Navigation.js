import React from 'react';
import { Platform, Dimensions, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateIsAuthenticatedUser } from './redux/actions/authenticationAction';
import { updateIdUser } from './redux/actions/userAction';
import { isIphoneX } from './Helper/Platform';

import GlobalStyle from './global/Styles';
import Parking from './screens/Parking';
import Ticket from './screens/Ticket';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';

const ParkingScreen = ({ navigation }) => <Parking navigation={navigation} />;
const TicketScreen = ({ navigation }) => <Ticket navigation={navigation} />;
const WalletScreen = ({ navigation }) => <Wallet navigation={navigation} />;

const TabNav = TabNavigator(
  {
    ParkingTab: {
      screen: ParkingScreen,
      navigationOptions: {
        header: true,
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: 'center', width: Platform.OS === 'android' ? 60 : null, height: Platform.OS === 'android' ? 60 : null }}>
            <View>
              <View style={{ width: 27, height: 3, backgroundColor: tintColor, marginBottom: Platform.OS === 'android' ? 10 : 7 }} />
              <Icon name="car" size={25} color={GlobalStyle.tabBarInactiveButtonColor} />
            </View>
          </View>
        )
      }
    },
    TicketTab: {
      screen: TicketScreen,
      navigationOptions: {
        header: true,
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: 'center', width: 70, height: 70, marginTop: Platform.OS === 'android' ? 10 : 0 }}>
            <View
              style={{
                backgroundColor: GlobalStyle.tabBarActiveButtonColor,
                width: isIphoneX() ? 60 : 50,
                height: isIphoneX() ? 60 : 50,
                borderRadius: isIphoneX() ? 30 : 25,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon name="qrcode" size={37} color="black" />
            </View>
          </View>
        )
      }
    },
    WalletTab: {
      screen: WalletScreen,
      navigationOptions: {
        header: true,
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: 'center', width: Platform.OS === 'android' ? 60 : null, height: Platform.OS === 'android' ? 60 : null }}>
            <View>
              <View style={{ width: 27, height: 3, backgroundColor: tintColor, marginBottom: Platform.OS === 'android' ? 10 : 7 }} />
              <Icon name="user-circle" size={28} color={GlobalStyle.tabBarInactiveButtonColor} />
            </View>
          </View>
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: GlobalStyle.tabBarActiveButtonColor,
      inactiveTintColor: 'rgb(255, 255, 255)',
      pressColor: Platform.OS === 'android' ? 'rgb(225, 225, 225)' : null,
      showIcon: true,
      showLabel: false,
      indicatorStyle: { backgroundColor: GlobalStyle.tabBarBackgroundColor },
      iconStyle: {
        height: 70,
        width: 200,
        marginTop: Platform.OS === 'android' ? -17 : 17
      },
      labelStyle: {
        marginTop: Platform.OS === 'android' ? 8 : 17,
        fontSize: Platform.OS === 'android' ? 8 : 9
      },
      style: {
        backgroundColor: GlobalStyle.tabBarBackgroundColor,
        height: Platform.OS === 'android' ? 60 : 50
      }
    }
  }
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav
  }
});

const App = props => {
  return <StacksOverTabs />;
};

const mapStateToProps = state => ({
  isAuthenticatedUser: state.authenticationReducer.isAuthenticatedUser,
  idUser: state.userReducer.idUser
});

export default connect(mapStateToProps, {
  updateIsAuthenticatedUser,
  updateIdUser
})(App);
