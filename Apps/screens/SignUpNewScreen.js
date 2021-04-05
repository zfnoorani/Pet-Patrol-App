import React, {useState} from 'react';
import  {Component} from 'react'
import {ImageBackground, StyleSheet, Text, View, TextInput, Keyboard, Button} from "react-native";
//import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import Feed from './Feed'
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';


export default class SignUpNewScreen extends Component {
    
   state={
       Username: '',
       Password: '',
       FirstName: '',
       LastName: '',
       City: '',
       StateAbv: ''
   } 

   handleUsername = (text) => {
    this.setState({Username: text })
 }

 handlePassword = (text) => {
    this.setState({ Password: text })
 }

 handleFname = (text) => {
    this.setState({ FirstName: text })
 }

 handleLname = (text) => {
    this.setState({ LastName: text })
 }

 handleCity = (text) => {
    this.setState({ City: text })
 }

 handleStateabv = (text) => {
    this.setState({ StateAbv: text })
 }

render(){
    function textStuff(){
        const [text, setText] = useState('');
    }
    
    return (
        
        <ImageBackground
         style={styles.background} 
         source={require('../assets/pawprints.jpg')}>
            <View>
                <Text style={[styles.heading]}>Pet Patrol</Text>
                
                <TextInput style={styles.questions} placeholder='Username' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleUsername}  />
                <TextInput style={styles.questions} placeholder='Password' onSubmitEditing={Keyboard.dismiss}  onChangeText = {this.handlePassword} />
                <TextInput style={styles.questions} placeholder='First Name' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleFname} />
                <TextInput style={styles.questions} placeholder='Last Name' onSubmitEditing={Keyboard.dismiss}  onChangeText = {this.handleLname} />
                <TextInput style={styles.questions} placeholder='City' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleCity} />
                <TextInput style={styles.questions} placeholder='State' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleStateabv} />
                <Button title='Sign-Up' onPress = { () =>  { this.props.navigation.navigate('Feed')}}/>
                
    
            </View>
        </ImageBackground>
    );


}
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
    
    questions: {
        marginTop: 5,
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
//export default SignUpNewScreen;