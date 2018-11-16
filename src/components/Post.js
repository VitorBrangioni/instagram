/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

type Props = {};

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.photo
        }
    }

    like() {
        const fotoAtualizada = {
            ...this.state.photo,
            likeada: !this.state.photo.likeada
        }
        this.setState({photo: fotoAtualizada});
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : 
            require('../../resources/img/s2.png')
    }
    
    render() {
        const { photo } = this.state;
        return (
            <View>
                <View style={styles.header}>
                    <Image source={{ uri: photo.urlPerfil }} style={styles.profileImage} />
                    <Text>{photo.loginUsuario}</Text>
                </View>
                <Image source={{uri: photo.urlFoto}} style={styles.photo} />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.likeBtn}
                            source={this.carregaIcone(photo.likeada)} />
                    </TouchableOpacity>
                </View>
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
    },
    likeBtn: {
        height: 40,
        width: 40,
    },
    footer: {
        margin: 10
    }

});
