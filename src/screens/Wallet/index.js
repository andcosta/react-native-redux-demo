import React, { Component } from 'react';
import { StyleSheet, StatusBar, ActivityIndicator, View, ListView, Button, Text } from 'react-native';
import _ from 'lodash';
import GlobalStyle from '../../global/Styles';
import WalletHeader from '../../components/WalletHeader';
import FeedCell from '../../components/ParkingCell';

const convert = obj => {
  let result = {};
  _.map(obj, (item, key) => {
    let value;
    if (typeof item === 'object') {
      if (item.$t) {
        value = item.$t;
      } else {
        value = convert(item);
      }
    } else {
      value = item;
    }
    result[key] = value;
  });
  return result;
};

let resultsCache = [];

export default class Feed extends Component {
  state = {
    isLoading: false,
    isLoadingTail: false,
    lastOffset: 0,
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  };

  componentDidMount() {
    this.fetchPets();
  }

  fetchPets = () => {
    const offset = this.state.lastOffset,
      URL = `https://api.petfinder.com/pet.find?location=US&format=json&offset=${offset}&key=cb55e117215c6eb73506d7164b0a3b6d`;

    if (_.isEmpty(resultsCache)) {
      this.setState({ isLoading: true });
    }

    fetch(URL)
      .then(response => response.json())
      .catch(error => {
        this.setState({
          dataSource: this.getDataSource([]),
          isLoading: false
        });
      })
      .then(data => {
        resultsCache = _.concat(resultsCache, _.toArray(convert(data.petfinder.pets.pet)));
        this.setState({
          isLoading: false,
          isLoadingTail: false,
          lastOffset: data.petfinder.lastOffset.$t,
          dataSource: this.getDataSource(resultsCache)
        });
      })
      .done();
  };

  getDataSource = pets => {
    return this.state.dataSource.cloneWithRows(pets);
  };

  onEndReached = () => {
    // We're already fetching
    if (this.state.isLoadingTail) {
      return;
    }
    this.setState({
      isLoadingTail: true
    });
    this.fetchPets();
  };

  renderRow = (pet, sectionID, rowID, highlightRowFunc) => {
    return (
      <FeedCell
        key={pet.id}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        pet={pet}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.isLoadingTail) {
      return <View style={styles.scrollSpinner} />;
    }

    return <ActivityIndicator style={styles.scrollSpinner} />;
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.screenBackgroundColor }}>
        <StatusBar backgroundColor={GlobalStyle.navigationDarkBackgroundColor} barStyle="dark-content" />
        <WalletHeader />
        {this.state.isLoading ? (
          <View style={styles.loading}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <ListView
            dataSource={this.state.dataSource}
            renderFooter={this.renderFooter}
            renderRow={this.renderRow}
            onEndReached={this.onEndReached}
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
          />
        )}
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
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollSpinner: {
    marginVertical: 20
  }
});
