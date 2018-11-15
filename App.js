/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Post from './src/components/Post';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      photos: []
    }
  }
  
  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(res => res.json())
      .then(photos => this.setState({ photos }))
      .catch(err => console.warn('houve erro'))
  }

  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.photos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <Post photo={item}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  }, 
  photo: {
    width,
    height: width
  }

});
