
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

type Props = {};

export default class InputCommentary extends Component<Props> {
    
    constructor() {
        super();
        this.state = {
        }
    }
    
    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') :
            require('../../resources/img/s2.png')
    }

    render() {

        return (
            <TouchableOpacity onPress={this.props.likeCallback}>
                <Image style={styles.likeBtn}
                    source={this.carregaIcone(this.props.photo.likeada)} />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    likeBtn: {
        height: 40,
        width: 40,
    },
    likes: {
        fontWeight: 'bold'
    },
})