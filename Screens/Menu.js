import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Linking,
    ScrollView,
    Button,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/StyleMenu';

const App = ({ navigation }) => {

    const handleClick = () => {
        navigation.navigate('TelaConsultaImei');
    }

    return (
        <LinearGradient colors={['#00CED1', '#66CDAA', '#5F9EA0']} style={Styles.linearGradient}>
       
            <View style={Styles.sliderContainer}>

                <Text style={Styles.TextoInfo}> Descarte seu equipamento através do programa de reciclagem RE+</Text>
                <TouchableOpacity style={Styles.botao} onPress={() => Linking.openURL('https://www.samsung.com/br/support/planet-first/')}>
                    <Text style={Styles.botaoTxt}>Reciclagem RE+</Text>
                </TouchableOpacity>

                <Text style={Styles.TextoInfo}>Contribua doando um celular através do programa abra a gaveta, DOE.</Text>
                <TouchableOpacity style={Styles.botao} onPress={() => Linking.openURL('https://doar.trocafone.com/')}>
                    <Text style={Styles.botaoTxt}>Doação</Text>
                </TouchableOpacity>

                <Text style={Styles.TextoInfo}> Consulte detalhes sobre o celular:</Text>
                <TouchableOpacity style={Styles.botao} onPress={handleClick}>
                    <Text style={Styles.botaoTxt}>Consultar</Text>
                </TouchableOpacity>
                
        </View>
    </LinearGradient>
    );
};

export default App;