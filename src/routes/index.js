import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather'

import CustomNav from '../Components/CustomNav'

import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
import StackNav from './StackNav';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function Routes(){
  return(
      <Drawer.Navigator
        drawerContent={CustomNav}
        screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: 'white'
            },
            drawerActiveBackgroundColor: '#00dae4',
            drawerActiveTintColor: 'white',
            
            drawerInactiveBackgroundColor: 'grey',
            drawerInactiveTintColor: 'black'
        }}
      >
        <Drawer.Screen
            name='HomeStack'
            component={StackNav}
        />

        <Drawer.Screen
            name='Sobre'
            component={Sobre}
        />

        <Drawer.Screen
            name='Contato'
            component={Contato}
        />
      </Drawer.Navigator>
  );
}

/* <Tab.Navigator>
        <Tab.Screen 
          name='StackNav'
          component={StackNav} 
          options={{
            tabBarIcon: ({color, size})=>{
              return <Feather name='home' color={color} size={size}/>
            },
            headerShown: false     
          }}
        />
        <Tab.Screen 
          name='Sobre' 
          component={Sobre} 
          options={{
            tabBarIcon: ({color,size})=>{
             return  <Feather name="file-text" color={color} size={size}/>
            },
            headerShown: false     
          }}
        />
       
        <Tab.Screen 
          name='Contato' 
          component={Contato} 
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="phone-call" color={color} size={size}/>
            },
            headerShown: false     
          }}
        />
      </Tab.Navigator> */