import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  linearGradient: {
      display: "flex",
      flex: 1,
      backgroundColor: '#E0FFFF',
      alignItems: 'center'
    },
    backgroundImage:{
      width:320,
      height:480,
    },
    slogan: {
      marginTop: 58,
      fontSize: 25, 
      fontWeight: 'bold', 
      textAlign: 'center',
      alignItems: 'center',
      color: '#FFD700'
    },
    TextoInfo: {
      fontSize: 22, 
      fontWeight: 'bold', 
      textAlign: 'center',
      color: '#E0FFFF',
      marginTop: 50
    },
    TxtFieldImei: {
      backgroundColor: '#FFF',
      width: '90%',
      margin: 35,
      color: '#222',
      fontSize: 20,
      borderRadius: 10,
      padding: 10
    },
    TextoImei: {
      fontSize: 20, 
      fontWeight: 'bold', 
      textAlign: 'center',
      color: '#FFFFFF',
      margin: 50
    },
    botao: {
      width: 200,
      height: 50, 
      backgroundColor: "#40E0D0",
      alignSelf: 'center',
      borderRadius: 30,
      marginTop: 30
    },
    botaoTxt: {
      fontSize: 20, 
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#808080",
      marginTop: 12,
      marginLeft: 5,
      borderRadius: 10,
    }
  });
  
export default Styles;