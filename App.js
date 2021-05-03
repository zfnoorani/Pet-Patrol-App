import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LostForm from "./Apps/screens/LostForm";
import SignInScreen from "./Apps/screens/SignInScreen";
import Flyer from "./Apps/screens/Flyer";
import FoundPost from "./Apps/screens/FoundPost";
import Feed from "./Apps/screens/Feed";
import MenuScreen from "./Apps/screens/MenuScreen";
import MockSignUp from "./Apps/screens/MockSignUp";
import Logout from "./Apps/screens/Logout";
import Users from "./Apps/screens/ChatUsers";
import ChatRoom from "./Apps/screens/ChatRoom";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

function App() {
  const [isSignin, setisSignin] = useState(false);
  useEffect(() => {
    //We want to make sure a user that is signed in stays signed in, ASYNC helps with that. Now one can log in and refresh the page and walaa, he/she is still signed in.
    console.log("working");
    let call = async () => {

      let user = await AsyncStorage.getItem("user");
      user = JSON.parse(user);
      console.log(user);

      if (user) {
        setisSignin(true);
      }
    };
    call();
  }, []);
  const setSignin = (value) => {
    setisSignin(value);
    console.log(value);
  };
  const logout = () => {
    //Signed out user
    AsyncStorage.removeItem("user");
    setisSignin(false);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        {isSignin ? (
          <>
          {/* Signed in User has access to the following pages:  */}
           <Stack.Screen
              name="MenuScreen"
              component={MenuScreen}
              options={{ title: "MenuScreen" }}
            />
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{ title: "Feed" }}
              // initialParams={{ logout }}
            />
             <Stack.Screen
              name="Logout"
              component={Logout}
              options={{ title: "Logout" }}
              initialParams={{ logout }}
            />
            <Stack.Screen
              name="Flyer"
              component={Flyer}
              options={{ title: "Flyer" }}
            />

            <Stack.Screen
              name="FoundPost"
              component={FoundPost}
              options={{ title: "FoundPost" }}
            />
            <Stack.Screen
              name="LostForm"
              component={LostForm}
              options={{ title: "LostForm" }}
            />
            <Stack.Screen
              name="ChatUsers"
              component={Users}
              options={{ title: "ChatUsers" }}
            />
            <Stack.Screen
              name="ChatRoom"
              component={ChatRoom}
              options={{ title: "ChatRoom" }}
            />
          </>
        ) : (
          <>
            {/* Signed out User has access to the following pages:  */}

            <Stack.Screen
              name="MockSignUp"
              component={MockSignUp}
              options={{ title: "SignUpScreen" }}
            />
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              initialParams={{ setSignin }}
              options={{ title: "SignIn" }}
            />
          </>
        )}
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
