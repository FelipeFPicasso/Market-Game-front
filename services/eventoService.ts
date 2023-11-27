import axios from 'axios';
import Evento from '../core/Evento';

interface ApiResponse {
    content: Evento[];
}



const token = {
    id: 75, 
    email: "felipeNovo@email.com",
    password: 12345,
    token : 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NSIsImV4cCI6NjcwMTEwOTAwOX0.xVftA-mCJyrvVzs3ZZO2P7BUyj_aDBuOv6gAbpcKHe8bbSitFe9XqeFURYd30J_tZHy4ABPK_g0IUn6SnK2cUQ'
};

const headers = {
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Acess-Control-Allow-Headers': 'Origin, X-Requested-with, Content-Type, Accept',
        'Authorization': `Bearer ${token.token}` 
        
    }
}


  

//const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'http://192.168.0.13:8080'; 


export const AuthEvento = async (evento: Evento): Promise<void> => {
    
    try {
        const response = await axios.post(`${BASE_URL}/login`, evento);
        //(response)

    } catch (error) {
        throw new Error('Erro ao efetuar login');
    }
};

export const createGame = async (evento: Evento): Promise<void> => {
    
    try {
        const response = await axios.post(`${BASE_URL}/game`, evento, headers);
        console.log(response)

    } catch (error) {
        throw new Error('Erro ao efetuar o cadastro do game');
    }
};


export const fetchEventos = async (): Promise<Evento[]> => {

    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/game/active`, headers);
        //console.log(response.data.content)
        return response.data.content;
        
    } catch (error) {
        
        alert('Lembrou de atualizar seu token?')
        throw new Error('Erro ao buscar eventos');


    }
};



/*const BASE_URL = 'https://www.eventos.bprates.com.br/';

export const fetchEventos = async (): Promise<Evento[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/eventos`);
    return response.data.content;
  } catch (error) {
    throw new Error('Erro ao buscar eventos');
  }
};*/

   /* try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/game`, {
            "email": "felipe@email.com",
            "password": "12345"
        }, headers);
        console.log(response.data.content)
        return response.data.content;
    } catch (error) {
        throw new Error('Erro ao buscar eventos');
    }
};*/

export const atualizarEvento = async (evento: Evento): Promise<void> => {
    
    try {
        await axios.put(`${BASE_URL}/game/${evento.id}`, evento, headers);
    } catch (error) {
        throw new Error('Erro ao atualizar o Game');
    }
};

export const deleteEvento = async (id: number) => {
    try {
        await axios.delete(`${BASE_URL}/game/${id}`, headers);
    } catch (error) {
        throw new Error('Erro ao deletar o Game');
    }
};
