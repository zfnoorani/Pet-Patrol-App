import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ImageBackground,
  Keyboard,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { auth, database, firebase } from "../../fbconfig";
import { fire } from "../../fbconfig";

import { useEffect } from "react";
import { firestoreAutoId } from "./idgenerator";

const App = ({ navigation }) => {
  const [pet, setPet] = useState("Dog");
  const [time, setTime] = useState("<1 hour");
  const [color, setColor] = useState("Black");
  const [name, setName] = useState("FirstName");
  const [lastName, setLastName] = useState("LastName");
  const [danger, setDanger] = useState("Dangerous");
  const [breed, setBreed] = useState("Unknown");
  const [info, setInfo] = useState("Unknown");
  const [town, setTown] = useState("Unknown");

  const [date, setDate] = useState("Today");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [valuefrom, setvaluefrom] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    tempDate = currentDate;
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  console.log(lastName);
  console.log("Id=", auth.currentUser.uid);

  //_________________________________FireBase Write
  const writeFire = () => {
    fire
      .collection("muUsers")
      .add({
        username: auth.currentUser.displayName,
        pet: pet,
        color: color,
        breed: breed,
        danger: danger,
        info: info,
        town: town,
        userId: auth.currentUser.uid,
        //date: date,//.toDateString(),
        time: date,//.toLocaleString(),
        type: "found",
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        fire
          .collection("Users")
          .doc(auth.currentUser.uid)
          .update({
            posts: firebase.firestore.FieldValue.arrayUnion({
              id: docRef.id,
              type: "found",
            }),
          });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  //_____________________________________________

  const nav = () => {
    navigation.navigate("Feed");
  };
  // In the below function we want to navigate to the feed page and then write to firebase.
  const combinedFunc = () => {
    nav();
    writeFire();
  };


  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <ScrollView>
        <View>
          <Text style={styles.heading}>Found Pet Form </Text>
          <View>
            <Text style={styles.baseText}>{valuefrom}</Text>
            <Text style={styles.heading2}>Type of Pet</Text>
            <Picker
              style={styles.questions}
              selectedValue={pet}
              onValueChange={(pet) => setPet(pet)}
            >
              <Picker.Item label="Dog" value="Dog" />
              <Picker.Item label="Cat" value="Cat" />
              <Picker.Item label="Snake" value="Snake" />
              <Picker.Item label="Rabbit" value="Rabbit" />
              <Picker.Item label="Mouse" value="Mouse" />
              <Picker.Item label="Monkey" value="Monkey" />
            </Picker>
            <Text style={styles.heading2}>When did you find it?</Text>
            <TextInput
              style={styles.questions}
              placeholder="When exactly did you find this pet"
              selectedValue={date}
              onChangeText={(date) => setDate(date)}
            />

            {/*Following is another way to implement data if need be:
             <View>
              <Button
                style={styles.questions}
                onPress={showDatepicker}
                title="Enter Date Pet was found"
              />
            </View>
            <View>
              <Button
                style={styles.questions}
                onPress={showTimepicker}
                title="Enter Time Pet was found"
              />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )} */}

            <Text style={styles.heading2}>How Dangerous is the pet?</Text>
            <Picker
              style={styles.questions}
              selectedValue={danger}
              onValueChange={(danger) => setDanger(danger)}
            >
              <Picker.Item label="Harmless"></Picker.Item>
              <Picker.Item label="Mostly Harmless"></Picker.Item>
              <Picker.Item label="Dangerous"></Picker.Item>
              <Picker.Item label="Very Dangerous"></Picker.Item>
            </Picker>
            <Text style={styles.heading2}>
              What Color was the pet you found?
            </Text>

            <Picker
              style={styles.questions}
              selectedValue={color}
              onValueChange={(color) => setColor(color)}
            >
              <Picker.Item label="Black"></Picker.Item>
              <Picker.Item label="Red"></Picker.Item>
              <Picker.Item label="Brown"></Picker.Item>
              <Picker.Item label="White"></Picker.Item>
              <Picker.Item label="Grey"></Picker.Item>
              <Picker.Item label="Blue"></Picker.Item>
              <Picker.Item label="Blonde"></Picker.Item>
              <Picker.Item label="Other"></Picker.Item>
            </Picker>
            <TextInput
              style={styles.questions}
              placeholder="Breed"
              selectedValue={breed}
              onChangeText={(breed) => setBreed(breed)}
            />
            <TextInput
              style={styles.questions}
              placeholder="What town did you find the pet in?"
              onSubmitEditing={Keyboard.dismiss}
              selectedValue={town}
              onChangeText={(town) => setTown(town)}
            />

          <TextInput
            style={styles.questions}
            placeholder="Additional Info"
            onSubmitEditing={Keyboard.dismiss}
            selectedValue={info}
            onChangeText={(info) => setInfo(info)}
          />
          <Button
            title="Review Found Post"
            onPress={() => {
              navigation.navigate("Flyer", {
                username: auth.currentUser.displayName,
                itemName: pet,
                timeStamp: time,
                colorName: color,
                townName: town,
                danger: danger,
                breed: breed,
                info: info,
              });
            }}
          />


            <Button title={"Submit"} onPress={combinedFunc} />
          </View>
        </View>
      </ScrollView>
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
  heading2: {
    fontSize: 20,
    paddingVertical: 15,
    textAlign: "center",
    fontWeight: "bold",
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
