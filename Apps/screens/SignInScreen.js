import React from "react";
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
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "../../fbconfig";

function SignInScreen({ navigation }) {
  const orientation = useDeviceOrientation();

  const onsubmit = () => {
      let email='abeerahmad204@gmail.com';
      let password='asdf124'
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
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
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          onSubmitEditing={Keyboard.dismiss}
        />
        
        <Button
          title="Submit"
          //   onPress={() => navigation.navigate("MenuScreen")}
          onPress={() => onsubmit()}
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
