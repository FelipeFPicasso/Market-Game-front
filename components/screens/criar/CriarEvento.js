import styles from './style';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { createGame } from '../../../services/eventoService';
import { atualizarEvento } from '../../../services/eventoService';
import ListaEventos from '../ListaEventos';

function CriarEvento({ route, navigation }) {


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [customerId, setCustomerId] = useState('');

    

    const criar = async () => {

        const payload = {
            name: name,
            price: price,
            customer_id: customerId
        }

        try {
            //console.log("payload: ",payload)
            await createGame(payload);
            navigation.goBack();



        } catch (error) {
            alert('Erro ao atualizar o Game.');
            console.error("Erro ao atualizar Game:", error);
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                value={name}
                onChangeText={name => setName(name)}
                placeholder="Nome do Game"
                style={styles.input}
            />
            <TextInput
                value={price}
                onChangeText={price => setPrice(price)}
                placeholder="Preço"
                style={styles.input}
            />

            <TextInput
                value={customerId}
                onChangeText={customerId => setCustomerId(customerId)}
                placeholder="id do Vendedor"
                style={styles.input}

            />
            <Button title="Save" onPress={criar} />
        </View>);
}
export default CriarEvento;