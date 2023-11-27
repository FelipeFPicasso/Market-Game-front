import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#eef2f9',
        
    },

    imagem: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
      },

    containerButton: {
        textAlign: 'right',
        flex: 1,
        padding: 1,
        backgroundColor: '#eef2f9'
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#88d9c0',
        shadowColor: "#000", //shadow para adcionar
        shadowOffset: { //um efeito sombreado abaixo do item
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }, //um efeito de elevação, se destacando na tela
    itemDate: {
        fontSize: 12,
        color: '#9b9b9b',
        //color: '#98FB98',
        alignSelf: 'flex-end'
    }, // alinhando a data a direita do container
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 8,
        color: '#374a67',
        //color: 'whi000te'
    },
    itemDescription: {
        fontSize: 14,
        color: '#6b7c93'
        //color: 'white'
    },
    itemButton: {
        width: 100,
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        backgroundColor: '#007AFF'
      },
      containerButton: {
        textAlign: 'right',
        padding: 10 
      },
      smallButton: {
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
        backgroundColor: '#F5DEB3',
        shadowColor: "#000", //shadow para adcionar
        shadowOffset: { //um efeito sombreado abaixo do item
            width: 5,
            height: 2,
        },
        shadowOpacity: 100,
        shadowRadius: 3.84,
        elevation: 5,

        
        fontSize: 15,
        fontWeight: 'bold',
        color: '#374a67',

        

      }

});