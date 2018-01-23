import React from 'react';
import { Platform, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { updateIsAuthenticatedUser } from './redux/actions/authenticationAction';
import { updateIdUser } from './redux/actions/userAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from './global/Styles';
import Feed from './screens/Feed';
import About from './screens/About';
import Messages from './screens/Messages';

const FeedScreen = ({ navigation }) => <Feed navigation={navigation} />;
const AboutScreen = ({ navigation }) => <About navigation={navigation} />;
const MessagesScreen = ({ navigation }) => <Messages navigation={navigation} />;

const TabNav = TabNavigator(
  {
    FeedTab: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        header: true,
        tabBarIcon: ({ tintColor }) => <Icon name="star-o" size={28} color={tintColor} />
      })
    },
    AboutTab: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ alignItems: 'center', width: 70, height: 70 }}>
            <View
              style={{
                backgroundColor: GlobalStyle.tabBarActiveButtonColor,
                width: 60,
                height: 60,
                borderRadius: 30,
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
    MessagesTab: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="comments-o" size={25} color={tintColor} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: GlobalStyle.tabBarActiveButtonColor,
      inactiveTintColor: GlobalStyle.tabBarInactiveButtonColor,
      pressColor: Platform.OS === 'android' ? 'rgb(225, 225, 225)' : null,
      showIcon: true,
      showLabel: false,
      indicatorStyle: { backgroundColor: GlobalStyle.tabBarBackgroundColor },
      iconStyle: { height: 30, width: 200 },
      labelStyle: {
        marginTop: Platform.OS === 'android' ? 3 : 17,
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
