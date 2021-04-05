import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";


function logout(props) {
    
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <Text style={styles.title}>Log out of Pet Patrol</Text>
      <Button title={"Logout"} onPress={props.route.params.logout} />
      
      

     
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },

  button: {
    fontSize: 45,
    textAlign: "left",
    borderWidth: 4,
    padding: 10,
    backgroundColor: "#4169e1",
  },

  description: {
    fontSize: 20,
  },

  descriptionContainer: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
  },

  icon: {
    width: 100,
    height: 100,
    paddingRight: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },

  postContainer: {
    flex: 1,
    flexDirection: "column",
  },

  post: {
    flexDirection: "row",
    borderWidth: 4,
    padding: 10,
    marginBottom: -4,
  },

  found: {
    backgroundColor: "#34eb83",
  },

  lost: {
    backgroundColor: "#f55b38",
  },

  lostFoundContainer: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },

  lostFoundTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 4,
    marginBottom: -4,
  },

  statusContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
  },

  status: {
    backgroundColor: "#38b6f5",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 20,
  },

  userTimestamp: {
    flexDirection: "row",
    marginBottom: -4,
    borderWidth: 4,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },

  username: {
    fontWeight: "bold",
    fontSize: 10,
    paddingLeft: 10,
  },

  timestamp: {
    fontSize: 10,
    paddingRight: 15,
  },
});

export default logout;
