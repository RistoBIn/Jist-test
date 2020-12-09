import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../screens/first';
import UsernameScreen from '../screens/username';
import VideoroomScreen from '../screens/videoroom';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="first">
                <Stack.Screen name="first" component={FirstScreen} />
                <Stack.Screen name="username" component={UsernameScreen} />
                <Stack.Screen name="videoroom" component={VideoroomScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;