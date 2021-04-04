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
import { Picker } from "@react-native-picker/picker";
import { auth } from "../../fbconfig";
import { createStackNavigator } from "@react-navigation/stack";

const App = ({ navigation }) => {
  const [pet, setPet] = useState("Dog");
  const [username, setUsername] = useState("Null");

  const [time, setTime] = useState("<1 hour");
  const [color, setColor] = useState("Black");
  const [name, setName] = useState("FirstName");
  const [lastName, setLastName] = useState("LastName");
  const [password, setPassword] = useState("Null");
  const [breed, setBreed] = useState("Unknown");
  const [info, setInfo] = useState("Unknown");
  console.log(username);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <View>
        <Text style={[styles.heading]}>Pet Patrol</Text>

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
        <TextInput
          style={styles.questions}
          placeholder="Email"
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(username) => setUsername(username)}
        />
        {/* <TextInput style={styles.questions} placeholder='First Name' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleFname} /> */}
        {/* <TextInput style={styles.questions} placeholder='Last Name' onSubmitEditing={Keyboard.dismiss}  onChangeText = {this.handleLname} />
                    <TextInput style={styles.questions} placeholder='City' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleCity} />
                    <TextInput style={styles.questions} placeholder='State' onSubmitEditing={Keyboard.dismiss} onChangeText = {this.handleStateabv} /> */}
        {/* <Button title='Sign-Up' onPress = { () =>  { this.props.navigation.navigate('Feed')}}/> */}
        <Button
          title="Auth"
          onPress={() =>
            auth
              .createUserWithEmailAndPassword(username, password)
              .then((creden) => {
                console.log(creden);
              })
              .then(navigation.navigate("MenuScreen"))
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
    // display: "block",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default App;
