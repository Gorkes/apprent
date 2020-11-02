import React, { Component } from 'react';
import Styles from '../styles/StyleAps';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

const App: () => React$Node = () => {

  const [imei, setImei] = React.useState('');
  const [marca, setMarca] = React.useState('');
  const [modelo, setModelo] = React.useState('');
  const [erro, setErro] = React.useState('');

  alert = () => {
    console.log(imei);
    console.log(marca);
    console.log(modelo);

    const api = 'https://api.sheety.co/52da6a21a2816a47f106c9f9381f3fcd/aps/página1?filter[imei]=' + imei;

    fetch(api, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.página1);
        const data = responseJson.página1;

        if(data == ""){
          return(
          Alert.alert(
            "Informações",
            'IMEI não existe'))} else{

        data.map((x) => {
          setMarca(x.status)
          setModelo(x.status)

          Alert.alert(
            "Informações",
            'Status IMEI: ' + x.status
            + '\nVersão: ' + x.versão
            + '\nDimensões: ' + x.dimensões
            + '\nBateria: ' + x.bateria
            + '\nMemoria: ' + x.memoria,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );

        })

      }})
      .catch((error) => {
        Alert.alert('Não foi possível consultar IMEI ' + error);
      });
  }

  return (
    <LinearGradient colors={['#00CED1', '#66CDAA', '#5F9EA0']} style={Styles.linearGradient}>
    {/* <View style={Styles.container}> */}
      <Text style={Styles.slogan}>Doe um celular</Text>
      <Text style={Styles.TextoInfo}>Precisaremos de algumas informações:</Text>

      <TextInput
        name="imei"
        style={Styles.TxtFieldImei}
        placeholder="IMEI"
        autoCorrect={false}
        value={imei}
        onChangeText={(event) => setImei(event)}
      />

      <Text style={Styles.TextoImei}>   *O Celular passará por uma análise de IMEI e
        caso haja queixa contra o aparelho o mesmo não poderá ser doado.</Text>

      <TouchableOpacity
        style={Styles.botaoAnalisar}
        onPress={this.alert}
      >
        <Text style={Styles.botaoAnalisarTxt}>Analisar</Text>
      </TouchableOpacity>
    {/* </View> */}
    </LinearGradient>
  );
};

export default App;