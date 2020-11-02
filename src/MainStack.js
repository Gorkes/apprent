import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TelaConsultaImei from '../Screens/TelaConsultaImei';
import Menu from '../Screens/Menu';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Menu' component ={Menu}/>
        <Stack.Screen options={{headerShown: false}} name="TelaConsultaImei" component ={TelaConsultaImei}/>
    </Stack.Navigator>
);