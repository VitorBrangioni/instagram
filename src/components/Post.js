/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import InputCommentary from './InputCommentary';
import Commentaries from './Commentaries';
import Like from './Like';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const margin = Platform.OS === 'ios' ? 20 : 0;
const width = Dimensions.get('screen').width;

type Props = {};

export default class Post extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            photo: { ...this.props.photo, likers: [{}, {}], comentarios: [{ id: 1, login: 'VitorBrangioni', texto: 'Bonita a foto!' }] }
        }
    }

    addCommentary(commentaryValue, inputCommentary) {
        if (commentaryValue === '') 
            return;

        const comentarios = [...this.state.photo.comentarios, {
            id: commentaryValue,
            login: 'VitorBrangioni',
            texto: commentaryValue
        }];
        const photo = {...this.state.photo, comentarios };

        this.setState({ photo });
        inputCommentary.clear();
    }

    like() {

        const { photo } = this.state;

        let likers = [];
        if (!photo.likeada) {
            likers = [
                ...photo.likers,
                { login: 'VitorBrangioni' }
            ]
        } else {
            likers = photo.likers.filter(like => {
                if (like.login !== 'VitorBrangioni') {
                    return like;
                }
            })
        }

        const fotoAtualizada = {
            ...photo,
            likers,
            likeada: !photo.likeada
        }
        this.setState({ photo: fotoAtualizada });
    }

    showLikes(likers) {
        if (likers.length == 0)
            return null;

        return (
            <Text style={styles.likes}>
                {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    like() {
        const { photo } = this.state;

        let likers = [];
        if (!photo.likeada) {
            likers = [
                ...photo.likers,
                { login: 'VitorBrangioni' }
            ]
        } else {
            likers = photo.likers.filter(like => {

                if (like.login !== 'VitorBrangioni') {
                    return like;
                }
            })
        }

        const fotoAtualizada = {
            ...photo,
            likers,
            likeada: !photo.likeada
        }
        this.setState({ photo: fotoAtualizada });
    }

    showLegend(photo) {
        if (!photo.comentario)
            return null;

        return (
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{photo.loginUsuario}</Text>
                <Text>{photo.comentario}</Text>
            </View>
        )

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
                <Image source={{ uri: photo.urlFoto }} style={styles.photo} />
                <View style={styles.footer}>
                    <Like photo={photo} likeCallback={this.like.bind(this)} />
                    
                    {this.showLikes(photo.likers)}
                    {this.showLegend(photo)}

                    <Commentaries comentarios={photo.comentarios} />
                    <InputCommentary commentaryCallback={this.addCommentary.bind(this)}/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: margin
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
        marginBottom: 10,
        width,
        height: width
    },
    likeBtn: {
        height: 40,
        width: 40,
    },
    likes: {
        fontWeight: 'bold'
    },
    footer: {
        margin: 10
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    },
    row: {
        flexDirection: 'row'
    },
    comentario: {
        flexDirection: 'row'
    },

});
