import { deleteEvento } from "../../../services/eventoService";
import { Alert } from 'react-native';

async function deletar(id, eventos, setEventos) {
    try {
        const response = await deleteEvento(id);
        console.log(response)



        const eventosAtualizado = eventos.filter(evento => evento.id !== id);
        setEventos(eventosAtualizado);
        Alert.alert('Sucesso', 'Game deletado com sucesso!');
    } catch (error) {
        console.log(error)
        Alert.alert('Erro', 'Ocorreu um erro ao tentar deletar o Game.');
    }
}
export function deletarEvento(item, eventos, setEventos) {
    Alert.alert(
        'Deletar Game',
        `Você tem certeza que deseja deletar o Game ${item.nome}?`,
        [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => deletar(item.id, eventos, setEventos) },
        ],
        { cancelable: true }
    );
}