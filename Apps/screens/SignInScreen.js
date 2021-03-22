import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, Keyboard, Button} from "react-native";
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';


function SignInScreen(props) {
    const orientation = useDeviceOrientation();

    return (
        <ImageBackground
         style={styles.background} 
         source={require('../assets/pawprints.jpg')}>
            <View>
                <Text style={[styles.heading, {marginTop: orientation.landscape ? 10 : "50%" }]}>Pet Patrol</Text>
                
                <TextInput style={styles.username} placeholder='username' onSubmitEditing={Keyboard.dismiss}/>
                <TextInput style={styles.password} placeholder='password' onSubmitEditing={Keyboard.dismiss}/>
                <Button title="Submit" />
                <Button title="Sign-up" />
            </View>
            
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain'
        
    },
    heading: {
        fontSize: 75,
        paddingVertical: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
    password:{
        marginTop: 55,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 2,
        backgroundColor: "#fff",
        width: "65%",
        //display: "flex",
        marginRight: "auto",
        marginLeft: "auto"
    },
    
    username: {
        marginTop: 50,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 2,
        backgroundColor: "#fff",
        width: "65%",
       // display: "block",
        marginRight: "auto",
        marginLeft: "auto"
    }
});
export default SignInScreen;