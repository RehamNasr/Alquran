

import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Ayat from '../Pages/Ayat';
import Azkar from '../Pages/Azkar'
import HomeAzkar from '../Pages/HomeAzkar'
import ItemAzkar from '../Pages/ItemAzkar'
import List_suar from '../Pages/List_suar'
import HomeDuas from '../Pages/HomeDuas'
import ItemDuas from '../Pages/ItemDuas'
import ListName from '../Pages/ListName'



const Stack = createNativeStackNavigator();
function HomeStack() {
    return (



        <Stack.Navigator   >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Ayat" component={Ayat} options={{ headerShown: false }}/>
            <Stack.Screen name="Azkar" component={Azkar} options={{ headerShown: false }}/>
            <Stack.Screen name="List_suar" component={List_suar} options={{ headerShown: false }}/>
            <Stack.Screen name="HomeAzkar" component={HomeAzkar} options={{ headerShown: false }}/>
            <Stack.Screen name="ItemAzkar" component={ItemAzkar} options={{ headerShown: false }}/>
            <Stack.Screen name="HomeDuas" component={HomeDuas} options={{ headerShown: false }}/>
            <Stack.Screen name="ItemDuas" component={ItemDuas} options={{ headerShown: false }}/>
            <Stack.Screen name="ListName" component={ListName} options={{ headerShown: false }}/>
        </Stack.Navigator>



    )

}


export default HomeStack;

