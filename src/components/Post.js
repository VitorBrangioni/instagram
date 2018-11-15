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

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image source={{uri: this.props.photo.urlPerfil}} style={styles.profileImage} />
                    <Text>{this.props.photo.loginUsuario}</Text>
                </View>
                <Image source={require('../../resources/img/mx.jpg')} style={styles.photo} />
            </View>
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
