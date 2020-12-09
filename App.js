import React from 'react';
import { View, StatusBar } from 'react-native';
import MainNavigator from './src/navigators/main';

const App = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <MainNavigator />
        </View>
    )
}

export default App;