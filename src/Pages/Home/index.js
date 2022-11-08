import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

export default function Home(){
    
    const navigation = useNavigation();

    function navegarDetalhes(){
        navigation.navigate('Detalhes', { nome: '', email: 'fulano@teste.com'})
    }

    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title='Ir para Detalhes' onPress={ navegarDetalhes }/>
            <Button title='Abrir drawer' onPress={ () => navigation.openDrawer() }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})