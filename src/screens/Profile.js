import React from 'react';
import { View,Text, SafeAreaView,StyleSheet, StatusBar, Platform } from 'react-native';
import TitleBar from '../components/TitleBar';

const Profile=({navigation})=>{
    return(
    <SafeAreaView style={styles.screen}>
        <TitleBar navObj={navigation}/>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
            <Text>Profile</Text>
        </View>
    </SafeAreaView>);
};

export default Profile;

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS==="android" ? StatusBar.currentHeight:0,
    }
});