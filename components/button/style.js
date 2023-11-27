import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        textAlign: "center",
        width: 100,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5, 
        color: 'black',
        border: 'none',
        
        marginBottom: 16,
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#698e76',
        shadowColor: "#000", //shadow para adcionar
        shadowOffset: { //um efeito sombreado abaixo do item
            width: -5,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 5,

        fontSize: 15,
        fontWeight: 'bold',
        color: '#374a67',
        
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#b1cbba',
        textAlign: 'center',
    },
    
});