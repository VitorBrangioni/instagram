/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';

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
            photo: { ...this.props.photo, likers: [{}, {}], comentarios: [{ id: 1, login: 'VitorBrangioni', texto: 'Bonita a foto!' }] }
        }
    }

    addCommentary() {
        const comentarios = [...this.state.photo.comentarios, {
            id: this.state.commentaryValue,
            login: 'VitorBrangioni',
            texto: this.state.commentaryValue
        }];
        const photo = {...this.state.photo, comentarios };

        this.setState({ photo, commentaryValue: '' });
        this.inputCommentary.clear();
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
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.likeBtn}
                            source={this.carregaIcone(photo.likeada)} />
                    </TouchableOpacity>
                    {this.showLikes(photo.likers)}
                    {this.showLegend(photo)}

                    <FlatList
                        data={photo.comentarios}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => 
                            <View style={styles.comentario}>
                                <Text style={styles.tituloComentario}>{item.login}</Text>
                                <Text>{item.texto}</Text>
                            </View>
                        }
                    />
                    <View style={styles.row}>
                        <TextInput style={styles.input} onChangeText={commentaryValue => this.setState({ commentaryValue })} ref={input => this.inputCommentary = input} placeholder="Adicione um comentário" />
                        <TouchableOpacity onPress={this.addCommentary.bind(this)}>
                            <Image style={styles.btnSend}
                                source={require('./../../resources/img/send-icon.jpg')} />
                        </TouchableOpacity>
                    </View>

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
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    },
    input: {
        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    btnSend: {
        width: 35,
        height: 35
    },
    row: {
        flexDirection: 'row'
    }

});
