import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaEventos from './components/screens/ListaEventos';
import EdicaoEvento from './components/screens/editar/EditarEvento';
import criarEvento from './components/screens/criar/CriarEvento';
import CriarEvento from './components/screens/criar/CriarEvento';
//import { Button } from 'react-native-paper';
//import LoginEvento from './components/screens/login/LoginEvento';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ListaEventos} 
          options={{ title: 'Market Game' }} />
          <Stack.Screen name="CriarEvento" component={CriarEvento} 
          options={{ title: 'Market Game' }} />
        <Stack.Screen name="EdicaoEvento" component={EdicaoEvento}
          options={{ title: 'Editar Evento' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}