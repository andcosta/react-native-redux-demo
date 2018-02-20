import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import NavigationHeader from '../../components/NavigationHeader';
import FlatListData from './indexDeletarList.js';

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={this._onPress}>
          <View style={{ flex: 1, padding: 20 }}>
            <Text>{this.props.name}</Text>
            <Text>{this.props.description}</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            width: '95%',
            backgroundColor: '#CED0CE',
            marginLeft: '5%'
          }}
        />
      </View>
    );
  }
}

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListRef: null,
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();

    this.flatListRef.scrollToEnd(false);
  }

  componentWillMount() {
    //this.flatListRef.scrollToEnd();
  }

  makeRemoteRequest = () => {
    this.setState({
      backgroundColor: 'red',
      data: FlatListData,
      error: null,
      loading: false,
      refreshing: false
    });

    // const { page, seed } = this.state;
    // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    // this.setState({ loading: true });

    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       data: page === 1 ? res.results : [...this.state.data, ...res.results],
    //       error: res.error || null,
    //       loading: false,
    //       refreshing: false
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error, loading: false });
    //   });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderHeader = () => {
    return <View style={{ backgroundColor: 'red', height: 200 }} />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View>
        <NavigationHeader title="Profile" />
        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          style={{ height: '88%' }}
          data={this.state.data}
          renderItem={({ item, index }) => <MyListItem id={item.id} name={item.name} description={item.description} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onScroll={this.onScroll}
        />
        <View
          style={{
            position: 'absolute',
            zIndex: -99,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: this.state.backgroundColor,
            opacity: 0.9
          }}
        />
      </View>
    );
  }

  onScroll = e => {
    const scrollTop = e.nativeEvent.contentOffset.y;

    if (scrollTop > 500) {
      this.setState({ backgroundColor: 'white' });
    } else {
      this.setState({ backgroundColor: 'red' });
    }
  };
}

export default FlatListDemo;
