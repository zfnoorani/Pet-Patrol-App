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
import DateTimePicker from "@react-native-community/datetimepicker";
import { database } from "../../fbconfig";

const App = ({ navigation }) => {
  const [pet, setPet] = useState("Dog");
  const [time, setTime] = useState("<1 hour");
  const [color, setColor] = useState("Black");
  const [name, setName] = useState("FirstName");
  const [lastName, setLastName] = useState("LastName");
  const [danger, setDanger] = useState("Dangerous");
  const [breed, setBreed] = useState("Unknown");
  const [info, setInfo] = useState("Unknown");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  var tempDate = "Ddate";

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

  const readdata = () => {
    var starCountRef = database.ref("/");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pawprints.jpg")}
    >
      <View>
        <Text>Find Pet Form </Text>
        <View>
          <TextInput
            placeholder="First Name"
            selectedValue={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            placeholder="Last Name"
            selectedValue={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
          />

          <Text style={styles.baseText}>Type of Pet</Text>
          <Picker selectedValue={pet} onValueChange={(pet) => setPet(pet)}>
            <Picker.Item label="Dog" value="Dog" />
            <Picker.Item label="Cat" value="Cat" />
            <Picker.Item label="Snake" value="Snake" />
            <Picker.Item label="Rabbit" value="Rabbit" />
            <Picker.Item label="Mouse" value="Mouse" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text style={styles.baseText}>When did you find it?</Text>

          <View>
            <Button onPress={showDatepicker} title="Enter Date Pet was found" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Enter Time Pet was found" />
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
          )}

          <Text style={styles.baseText}>How Dangerous was the pet?</Text>
          <Picker
            selectedValue={danger}
            onValueChange={(danger) => setDanger(danger)}
          >
            <Picker.Item label="Harmless"></Picker.Item>
            <Picker.Item label="Mostly Harmless"></Picker.Item>
            <Picker.Item label="Dangerous"></Picker.Item>
            <Picker.Item label="Very Dangerous"></Picker.Item>
          </Picker>
          <Text style={styles.baseText}>What Color was the pet you found?</Text>

          <Picker selectedValue={color} onValueChange={(pet) => setColor(pet)}>
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
            placeholder="Breed"
            selectedValue={breed}
            onChangeText={(breed) => setBreed(breed)}
          />
          <TextInput
            style={styles.textify}
            placeholder="What town did you find the pet in?"
            onSubmitEditing={Keyboard.dismiss}
            selectedValue={info}
            onChangeText={(info) => setInfo(info)}
          />

          <TextInput
            style={styles.textify}
            placeholder="Additional Info"
            onSubmitEditing={Keyboard.dismiss}
            selectedValue={info}
            onChangeText={(info) => setInfo(info)}
          />
          <Button
            title="Submit"
            onPress={() => {
              navigation.navigate("Flyer", {
                name: name,
                lastName: lastName,
                itemName: pet,
                timeStamp: time,
                colorName: color,
                danger: danger,
                breed: breed,
                info: info,
              });
            }}
          />
          <Button
            onpress={() => {
              readdata();
            }}
          />
        </View>
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
