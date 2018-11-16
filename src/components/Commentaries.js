
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

type Props = {};

export default class InputCommentary extends Component<Props> {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {

        return (
            <FlatList
                data={this.props.comentarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.comentario}>
                        <Text style={styles.tituloComentario}>{item.login}</Text>
                        <Text>{item.texto}</Text>
                    </View>
                }
            />
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