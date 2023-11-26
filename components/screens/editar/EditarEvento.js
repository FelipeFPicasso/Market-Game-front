import styles from './style';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { atualizarEvento } from '../../../services/eventoService';
import ListaEventos from '../ListaEventos';

function EdicaoEvento({ route, navigation }) {
    const [evento, setEvento] = useState(route.params.evento);
    const salvarEdicoes = async () => {
        try {
            //console.log(evento)
            await atualizarEvento(evento);
            alert('Game atualizado com sucesso!');
            navigation.goBack();
            
            

        } catch (error) {
            alert('Erro ao atualizar o Game.');
            console.error("Erro ao atualizar Game:", error);
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                value={evento.name}
                onChangeText={name => setEvento({ ...evento, name })}
                placeholder="Nome do Game"
                style={styles.input}
            />
            <TextInput
                value={evento.price}
                onChangeText={price => setEvento({ ...evento, price })}
                placeholder="Preço"
                style={styles.input}
            />

            <TextInput
                value={evento.status}
                onChangeText={status => setEvento({ ...evento, status })}
                placeholder="Status"
                style={styles.input}
            />
            <Button title="Save" onPress={salvarEdicoes} />
        </View>);
}
export default EdicaoEvento;