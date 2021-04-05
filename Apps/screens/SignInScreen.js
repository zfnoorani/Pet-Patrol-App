import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
  script,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Feed from "./Feed";
import SignUpNewScreen from "./SignUpNewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Assets, createStackNavigator } from "@react-navigation/stack";
import { auth } from "../../fbconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignInScreen({ navigation, ...props }) {
  const orientation = useDeviceOrientation();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  console.log(props);
  const handleSignin = () => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        AsyncStorage.setItem("user", JSON.stringify(user));

        console.log(user);
        props.route.params.setSignin(true);

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <View>
        <Text
          style={[
            styles.heading,
            { marginTop: orientation.landscape ? 10 : "50%" },
          ]}
        >
          Pet Patrol
        </Text>

        <TextInput
          style={styles.username}
          placeholder="Username"
          onSubmitEditing={Keyboard.dismiss}
          onChange={(e) => setusername(e.target.value)}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          onSubmitEditing={Keyboard.dismiss}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <Button
          title="Submit"
          onPress={handleSignin}
          //   onPress={() => navigation.navigate("MenuScreen")}
        />
        <Button
          title="Sign-Up"
          onPress={() => navigation.navigate("MockSignUp")}
        />
      </View>
    </ImageBackground>
  );
}

function submitFunc() {
  return Feed;
}

function signin() {
  return SignUpScreen;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 75,
    paddingVertical: 15,
    textAlign: "center",
    fontWeight: "bold",
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
    marginLeft: "auto",
  },

  password: {
    marginTop: 50,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 2,
    backgroundColor: "#fff",
    width: "65%",
    // display: "block",
    marginRight: "auto",
    marginLeft: "auto",
  },
});
export default SignInScreen;
