import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Screen = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const join = () => {
        if (!username) {
            Alert.alert("Error", "Type your username.");
            return ;
        }

        navigation.navigate("videoroom", { username: username })
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30,
            }}
        >
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>meet.jit.si/testRoom</Text>

            <View style={{ height: 40 }} />
            <TextInput
                style={{
                    height: 50,
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    width: '100%',
                    fontSize: 17,
                    textAlign: 'center'
                }}
                placeholder="Please enter your name here"
                value={username}
                onChangeText={(v) => setUsername(v)}
            />
            <View style={{ height: 10 }} />
            <TouchableOpacity onPress={() => join()}>
                <Text style={{ fontSize: 17, color: 'blue' }}>Join meeting</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen