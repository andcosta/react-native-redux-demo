import React from 'react';
import { Platform, Dimensions, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { updateIsAuthenticatedUser } from './redux/actions/authenticationAction';
import { updateIdUser } from './redux/actions/userAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from './global/Styles';
import { isIphoneX } from './Helper/Platform';
import Feed from './screens/Feed';
import Ticket from './screens/Ticket';
import Profile from './screens/Profile';

const FeedScreen = ({ navigation }) => <Feed navigation={navigation} />;
const TicketScreen = ({ navigation }) => <Ticket navigation={navigation} />;
const ProfileScreen = ({ navigation }) => <Profile navigation={navigation} />;

const TabNav = TabNavigator(
  {
    FeedTab: {
      screen: FeedScreen,
      navigationOptions: {
        header: true,
        tabBarIcon: ({ tintColor }) => <Icon name="car" size={25} color={tintColor} />
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
    ProfileTab: {
      screen: ProfileScreen,
      navigationOptions: {
        header: true,
        tabBarIcon: ({ tintColor }) => <Icon name="user-circle" size={28} color={tintColor} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: GlobalStyle.tabBarInactiveButtonColor,
      inactiveTintColor: GlobalStyle.tabBarInactiveButtonColor,
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
