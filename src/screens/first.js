import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Welcome</Text>

            <View style={{ height: 20 }} />

            <TouchableOpacity onPress={() => navigation.navigate("username")}>
                <Text style={{ fontSize: 17, color: 'blue' }}>Go to video room</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen