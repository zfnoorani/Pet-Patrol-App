import React from "react";
import { useEffect, useState } from "react";
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
import { fire } from "../../fbconfig";

function LostPets(props) {
  const [posts, setposts] = useState([]);
  const fetchfeeds = () => {
    fire.collection("muUsers").onSnapshot((doc) => {
      let data = doc.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Current data: ", data);

      setposts(data);
    });
  };
  useEffect(fetchfeeds, []);
  

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <Text style={styles.title}>Feed</Text>
      {/* <Button title={"logout"} onPress={props.route.params.logout} /> */}
      <ScrollView>
        {posts.map((item, i) => {
          return (
            <TouchableOpacity key={i}>
              <Text
                style={[
                  styles.lostFoundTitle,
                  { backgroundColor: item.type == "found" ? "green" : "red" },
                ]}
              >
                {item.type}
              </Text>
              <View
                style={[
                  styles.post,
                  { backgroundColor: item.type == "found" ? "green" : "red" },
                ]}
              >
                <View style={styles.lostFoundContainer}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/allAnimal.jpg")}
                  ></Image>
                </View>
                <View style={styles.descriptionContainer}>
                  <View>
                    <Text style={styles.name}>{item.color} {item.pet}</Text>
                  </View>
                  <View>
                    <Text style={styles.description}>Danger Lev :{item.danger}</Text>
                    <Text style={styles.description}>Breed :{item.breed}</Text>
                    <Text style={styles.description}>Info :{item.info}</Text>
                    <Text style={styles.description}>Location :{item.town}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.userTimestamp}>
                <Text style={styles.username}>
                  {item.username}
                </Text>
                {/* <Text style={styles.username}>{item.last}</Text> */}
                <Text style={styles.timestamp}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}

// Styling
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
    backgroundColor: "#910606",
  },

  description: {
    padding: 10,
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",

  },

  descriptionContainer: {
    padding: 20,
    flexDirection: "row",
    fontWeight: "bold",
    alignItems: "center",
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
    backgroundColor: "#910606",
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
  username2: {
    fontWeight: "bold",
    fontSize: 10,
    paddingLeft: 15,
  },

  timestamp: {
    fontSize: 10,
    paddingRight: 15,
  },
});

export default LostPets;
