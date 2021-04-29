import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ImageBackground,
  Keyboard,
} from "react-native";
import { auth, fire } from "../../fbconfig";

//This file is a mock sign up but indeed it acts as an actual sign up.

const App = ({ navigation }) => {
  const [username, setUsername] = useState("Null");
  const [password, setPassword] = useState("Null");
  console.log(username);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <View>
        <Text style={[styles.heading]}>Sign-Up</Text>

        <TextInput
          style={styles.questions}
          placeholder="Email"
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.questions}
          placeholder="Password"
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          title="Sign Up"
          onPress={() =>
            auth
              //Creating a new user with username and password
              .createUserWithEmailAndPassword(username, password)
              .then((creden) => {
                var user = creden.user;
                //The below "fire.collection("Users") is not need but is good to play around with a non-critical collection.
                fire.collection("Users").doc(auth.currentUser.uid).set({
                  name: "random",
                  username: username,
                });
                console.log(user);
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
              })
          }
        />
      </View>
    </ImageBackground>
  );
};
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

  questions: {
    marginTop: 5,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 2,
    backgroundColor: "#fff",
    width: "65%",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default App;
