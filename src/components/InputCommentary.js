
import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

type Props = {};

export default class InputCommentary extends Component<Props> {

    constructor() {
        super();
        this.state = {
            commentaryValue: ''
        }
    }

    render() {

        return (
            <View style={styles.row}>
                <TextInput style={styles.input} onChangeText={commentaryValue => this.setState({ commentaryValue })} ref={input => this.inputCommentary = input} placeholder="Adicione um comentário" />
                <TouchableOpacity onPress={() => this.props.commentaryCallback(this.state.commentaryValue, this.inputCommentary)}>
                    <Image style={styles.btnSend}
                        source={require('./../../resources/img/send-icon.jpg')} />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
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
})