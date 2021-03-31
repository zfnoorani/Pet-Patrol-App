import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LostForm from './Apps/screens/LostForm';
import SignInScreen from './Apps/screens/SignInScreen';
import Flyer from './Apps/screens/Flyer';
import FoundPost from './Apps/screens/FoundPost';
import Feed from './Apps/screens/Feed';
import MenuScreen from './Apps/screens/MenuScreen';
import SignUpNewScreen from './Apps/screens/SignUpNewScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
 
const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
 
    <Stack.Navigator initialRouteName="SignInScreen" >
    <Stack.Screen name="Feed" component={Feed} options={{title: 'Feed'}} />
    <Stack.Screen name="Flyer" component={Flyer} options={{title: 'Flyer'}} />
    <Stack.Screen name="MenuScreen" component={MenuScreen} options={{title: 'MenuScreen'}} />
    <Stack.Screen name="FoundPost" component={FoundPost} options={{title: 'FoundPost'}} />
    <Stack.Screen name="SignUpNewScreen" component={SignUpNewScreen}  options={{title: 'SignUp'}} />

    <Stack.Screen name="LostForm" component={LostForm}  options={{title: 'welcome'}} />
    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{title: 'SignIn'}} />
 
      
      
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

