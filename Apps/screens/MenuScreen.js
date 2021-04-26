import React from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet, Text, View, TextInput, Keyboard, Button} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { auth, fire, database } from "../../fbconfig";


const MenuScreen = ({navigation}) => {

    return (
        <ImageBackground 
        style={styles.background} 
        source={require('../assets/pawprints.jpg')}>
            <Text style={styles.menu}>Menu</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Feed');}}>
                    <Text style={styles.button}>
                        Feed
                    </Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity onPress={() => { navigation.navigate('LostForm');}}>
                    <Text style={styles.button}>
                        Lost Posts
                    </Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity onPress={() => { navigation.navigate('FoundPost');}}>
                    <Text style={styles.button}>
                        Found Posts
                    </Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity onPress={() => {
                    auth.onAuthStateChanged(function(user) {
                        if (user) {
                          // User is signed in.
                          console.log(user)
                          navigation.navigate('ChatUsers', {                
                            name: user.displayName,                   
                            email: user.email,             
                            avatar: null,                    
                            uid: user.uid,                
                            username: user.displayName,         
                            uemail: user.email
                        })
                        } else {
                          // No user is signed in.
                        }
                      });
                    /*navigation.navigate('ChatUsers', {                
                        name: "datboi",                   
                        email: "datboi@gmail.com",             
                        avatar: null,                    
                        uid:"IXcZLwjsynZi0wwzbZzhy85kPL42",                
                        username:"datboi",         
                        uemail:"datboi@gmail.com"
                    })*/}}>
                    <Text style={styles.button}>
                        Messages
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Logout');}}>
                    <Text style={styles.button}>
                        Logout
                    </Text>
                </TouchableOpacity>
        
        </ImageBackground>  
    );
    

                    }
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain'
        
    },

    button: {
        fontSize: 45,
        textAlign: 'left',
        borderWidth: 4,
        padding: 10,
        backgroundColor: '#4169e1',   
    },

    menu: {
        fontSize: 75,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 75,
        paddingBottom: 100,

    },

    view: {
        backgroundColor: '#00bfff',
        flex: 1,
    }
})

export default MenuScreen;