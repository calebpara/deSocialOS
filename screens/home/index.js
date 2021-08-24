import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, Animated} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors'
import Post from '../../components/Home/Post'
// import posts from '../../data/posts'
import {useFeedData} from '../../state/hooks'
import posts from '../../data/posts'
import Header from '../../components/Home/Header'
import {useNavigation} from '@react-navigation/native';
// const BASE_URI = 'https://source.unsplash.com/random?sig=';

export default function HomeScreen() {

const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,80)
const translateY = diffClamp.interpolate ({
    inputRange:[0,80],
    outputRange:[0,-80],
})

const posts = useFeedData()

return (
    <View style={styles.container}>
        <Animated.View
        style={{
            transform:[
                {translateY:translateY}
            ],
            zIndex: 100,
        }}
        >
            <Header />
        </Animated.View>
        <SafeAreaView style={styles.content}>
            <FlatList 
            data={posts} 
            numColumns={2}
            initialNumToRender={6}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <Post post={item}/>
            )}
            onScroll={(e) => {
                scrollY.setValue(e.nativeEvent.contentOffset.y)

            }}
            />
        </SafeAreaView>    
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
  },
});
