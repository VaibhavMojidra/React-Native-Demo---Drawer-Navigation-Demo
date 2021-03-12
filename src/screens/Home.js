import React from 'react';
import { View,Text, SafeAreaView,StyleSheet, StatusBar, Platform } from 'react-native';
import TitleBar from '../components/TitleBar';

const Home=({navigation})=>{
    return(
    <SafeAreaView style={styles.screen}>
        <TitleBar navObj={navigation}/>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
            <Text>Home</Text>
        </View>
    </SafeAreaView>);
};

export default Home;

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS==="android" ? StatusBar.currentHeight:0,
    }
});