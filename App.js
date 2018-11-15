/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

const photos = [
  { id: '1', name: 'Vitor Brangioni' },
  { id: '2', name: 'Jonny' },
  { id: '3', name: 'Joaca' },
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <FlatList style={{ marginTop: 20 }}
          data={photos}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View>
              <Text>{item.name}</Text>
              <Image source={require('./resources/img/mx.jpg')} style={{ width: width, height: width }} />
            </View>
          }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
