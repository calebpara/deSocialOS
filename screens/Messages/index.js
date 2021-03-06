import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Animated, TouchableOpacityComponent, TouchableOpacity, Button } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../assets/colors'
import HeaderBar from '../../components/Messages/HeaderBar'

import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
  } from 'react-native-shared-element';

export default function MessagesScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <HeaderBar />
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Button title="Open Alert" onPress={() => navigation.navigate('TsxPending')} />
        </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        width: 200,
        height: 100,
    },
    video2: {
        width: '100%',
        height: '100%',
    },
});
