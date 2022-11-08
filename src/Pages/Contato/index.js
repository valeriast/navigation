import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato(){

    const navigation = useNavigation();

    function voltarhome(){
        navigation.dispatch(StackActions.popToTop)
    }

    return(
        <View style={styles.container}>
            <Text>Contato</Text>
            <Button title='Voltar para HOME' onPress={voltarhome} />
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