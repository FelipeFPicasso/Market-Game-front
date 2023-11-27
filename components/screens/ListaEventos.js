import styles from './style';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { fetchEventos } from '../../services/eventoService';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { deletarEvento } from './deletar/DeletarEvento';
import Button from '../button/Button';
import criarEvento from './criar/CriarEvento';





//const CORES = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
const CORES = ['#9bd3ae', '#a3ffac'];

function ListaEventos({ navigation }) {
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        const carregarEventos = async () => {
            const data = await fetchEventos();
            setEventos(data);
        };
        carregarEventos();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const carregarEventos = async () => {
                const data = await fetchEventos();
                setEventos(data);
            };
            carregarEventos();
        }, [])
    );

    function editarEvento(eventoSelecionado) {
        navigation.navigate('EdicaoEvento', { evento: eventoSelecionado });
    }

    function CriarEvento() {
        navigation.navigate('CriarEvento', { evento: {} });
    }
    


/* 
<div style={{ textAlign: 'right', padding: '10px' }}>
                <Button title="Criar" style={styles.smallButton} />
                <button style={styles.smallButton}>Criar</button>
            </div> */

//<Image source={require('../../assets/image-removebg-preview.png')}/>

    return (
        <View style={styles.container}>

            
      
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>

            <View><Image source={require('../../assets/Image.png')}
                style={styles.imagem}/></View>
            <View style={{marginTop: 80}}><Button label="Create" onPress={() => CriarEvento()} /></View>
            

            
                
                
                
            </View>
            <FlatList
                data={eventos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    const corItem = CORES[index % CORES.length];
                    return (
                        <TouchableOpacity onPress={() => editarEvento(item)}
                            onLongPress={() => { deletarEvento(item, eventos, setEventos) }}>
                            <View style={{ ...styles.itemContainer, backgroundColor: corItem }}>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.price}</Text>
                                <Text style={styles.itemDate}>{item.status}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );


}

export default ListaEventos;