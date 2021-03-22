import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LostForm from './Apps/screens/LostForm';
import SignInScreen from './Apps/screens/SignInScreen';
import Flyer from './Apps/screens/Flyer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
 
const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
 
    <Stack.Navigator initialRouteName="LostForm" >
    <Stack.Screen name="Flyer" component={Flyer} options={{title: 'Flyer'}} />
 
    <Stack.Screen name="LostForm" component={LostForm}  options={{title: 'welcome'}} />
    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{title: 'no'}} />
 
      
      
    </Stack.Navigator>
    </NavigationContainer>
 
  );
}
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

