// This flyer is for users to preview the flyer before submitting
import React, { useState, Component } from "react";

import {
  Picker,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";

const App = ({ route, navigation }) => {

  const { username, lastName, itemName, timeStamp, colorName, danger, breed, info, townName } = route.params;








  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/icon.png')}>
    <View >
    <Text>Here is your flyer!</Text>
      <Text>Username: {JSON.stringify(username)}</Text>
      <Text>Pet: {JSON.stringify(itemName)}</Text>
      {/* <Text>Time: {JSON.stringify(timeStamp)}</Text> */}
      <Text>Color: {JSON.stringify(colorName)}</Text>
      <Text>Dangerous Level: {JSON.stringify(danger)}</Text>
      <Text>Breed: {JSON.stringify(breed)}</Text>
      <Text>Town: {JSON.stringify(townName)}</Text>




        <Text>Extra Info: {JSON.stringify(info)}</Text>

        <Text>Find Pet Form </Text>
        <View></View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
});

export default App;
