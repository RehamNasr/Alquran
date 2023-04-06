

import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack'
function MainNavigation() {

    return (

        <NavigationContainer>

            <HomeStack />
        </NavigationContainer>


    )

}


export default MainNavigation;

