import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center'
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
      fontSize: 20, 
      fontWeight: 'bold', 
      textAlign: 'center',
      color: '#FFFFFF',
      margin: 15
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
    botaoAnalisar: {
      width: '80%',
      height: 50, 
      backgroundColor: "#FFD700",
      alignSelf: 'center'
    },
    botaoAnalisarTxt: {
      fontSize: 20, 
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 12,
      marginLeft: 5
    }
  });
  
export default Styles;