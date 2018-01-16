import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { updateIsAuthenticatedUser } from './redux/actions/authenticationAction';
import { updateIdUser } from './redux/actions/userAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from './global/Styles';
import Feed from './screens/Feed';
import About from './screens/About';
import Messages from './screens/Messages';
import Calendars from './screens/Calendars';
import More from './screens/More';

const FeedScreen = ({ navigation }) => <Feed navigation={navigation} />;
const AboutScreen = ({ navigation }) => <About navigation={navigation} />;
const CalendarsScreen = ({ navigation }) => <Calendars navigation={navigation} />;
const MessagesScreen = ({ navigation }) => <Messages navigation={navigation} />;
const MoreScreen = ({ navigation }) => <More navigation={navigation} />;

const TabNav = TabNavigator(
  {
    FeedTab: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        header: true,
        title: 'Edy Lemond',
        tabBarIcon: ({ tintColor }) => <Icon name="star-o" size={28} color={tintColor} />
      })
    },
    AboutTab: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'Biografia',
        tabBarIcon: ({ tintColor }) => <Icon name="address-card-o" size={25} color={tintColor} />
      }
    },
    CalendarsTab: {
      screen: CalendarsScreen,
      navigationOptions: {
        title: 'Agenda',
        tabBarIcon: ({ tintColor }) => <Icon name="calendar-o" size={25} color={tintColor} />
      }
    },
    MessagesTab: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'Mensagens',
        tabBarIcon: ({ tintColor }) => <Icon name="comments-o" size={25} color={tintColor} />
      }
    },
    MoreTab: {
      screen: MoreScreen,
      navigationOptions: {
        title: 'Mais',
        tabBarIcon: ({ tintColor }) => <Icon name="navicon" size={25} color={tintColor} />
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
      showLabel: true,
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
