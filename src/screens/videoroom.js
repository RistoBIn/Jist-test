import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const Screen = () => {
    const route = useRoute();
    const username = route.params.username;
    const navigation = useNavigation();

    const onConferenceTerminated = (nativeEvent) => {
        console.log("onConferenceTerminated");
        navigation.goBack();
    }

    const onConferenceJoined = (nativeEvent) => {
        console.log("onConferenceJoined")
    }

    const onConferenceWillJoin = (nativeEvent) => {
        console.log("onConferenceWillJoin")
    }

    useEffect(() => {
        setTimeout(() => {
            const url = 'https://meet.jit.si/testRoom';
            const userInfo = { displayName: username, email: 'user@example.com', avatar: 'https:/gravatar.com/avatar/abc123' };
            JitsiMeet.call(url, userInfo);
        }, 1000)
        return () => {
            JitsiMeet.endCall();
        };
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <JitsiMeetView
                onConferenceTerminated={onConferenceTerminated}
                onConferenceJoined={onConferenceJoined}
                onConferenceWillJoin={onConferenceWillJoin}
                style={{
                    flex: 1,
                    height: '100%',
                    width: '100%'
                }}
            />
        </View>
    )
}

export default Screen