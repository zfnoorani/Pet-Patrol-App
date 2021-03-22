import React, {useState, Component} from 'react';
 
import {Picker, Text, StyleSheet, View, TextInput, Button,ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
 
 
const App = ({ route, navigation }) => {
  
 
  const { name, lastName, itemName, timeStamp, colorName, danger } = route.params;
 
  
 
 
 
 
  
 
  return (
    <ImageBackground
    style={styles.background} 
    source={require('../assets/icon.png')}>
    <View >
    <Text>Here is your flyer!</Text>
         <Text>Name: {JSON.stringify(name)}</Text>
      <Text>LastName: {JSON.stringify(lastName)}</Text>
      <Text>Pet: {JSON.stringify(itemName)}</Text>
      <Text>Time: {JSON.stringify(timeStamp)}</Text>
      <Text>Color: {JSON.stringify(colorName)}</Text>
      <Text>Dangerous?: {JSON.stringify(danger)}</Text>
 
      <Text >Find Pet Form </Text>
      <View>
       
      </View>
    </View>
    </ImageBackground>
 
  );
};
const styles = StyleSheet.create({
  background: {
      flex: 1,
      resizeMode: 'contain'
      
  }
});
 
export default App;
