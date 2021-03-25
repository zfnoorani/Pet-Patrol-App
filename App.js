import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LostForm from "./Apps/screens/LostForm";
import SignInScreen from "./Apps/screens/SignInScreen";
import Flyer from "./Apps/screens/Flyer";
import FoundPost from "./Apps/screens/FoundPost";


import MenuScreen from "./Apps/screens/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "GET",
      data: JSON.stringify({ name: "Zamin Test" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LostForm">
        <Stack.Screen
          name="Flyer"
          component={Flyer}
          options={{ title: "Flyer" }}
        />
      
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{ title: "MenuScreen" }}
        />
        <Stack.Screen
          name="FoundPost"
          component={FoundPost}
          options={{ title: "FoundPost" }}
        />

        <Stack.Screen
          name="LostForm"
          component={LostForm}
          options={{ title: "welcome" }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: "no" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
