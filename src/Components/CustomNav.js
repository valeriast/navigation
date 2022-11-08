import Reacto from 'react'
import {View, Text, Image} from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


export default function CustomNav(props){
    return(
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%',
                height: 85,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40
            }}>
                <Image
                    style={{ 
                        height: 65,
                        width: 65
                    }}
                    source={require('../Assets/perfil.png')}
                />
                <Text style={{
                    marginBottom: 40
                }}>Seja Bem Vindo!</Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}