import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Home from './Home'
import CampeonatosBR from './CampeonatosBR';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{tabBarLabel:'Home', tabBarIcon:({color, size})=> (
                <MaterialCommunityIcons name="home-circle" color={color} size={size}/>
            ),
            }}
            />
            
            <Tab.Screen
            name='CampeonatosBR'
            component={CampeonatosBR} 
            options={{tabBarLabel:'CampeonatosBR', tabBarIcon:({color, size})=> (
                <MaterialCommunityIcons name="trophy" color={color} size={size}/>
            ), 
            }}
            />
        </Tab.Navigator>
    );
}