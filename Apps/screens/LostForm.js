import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button,ImageBackground, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const App = ({navigation}) => {
    const [pet, setPet] = useState('Cat');
    const [time, setTime] = useState('<1 hdour');
    const [color, setColor] = useState('Black');
    const [name, setName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [danger, setDanger] = useState('Dangerous');
    const [breed, setBreed] = useState('Unknown');
    const [info, setInfo] = useState('Unknown');

    console.log(lastName)
    
   
   
   
   
    
   
    return (
      <ImageBackground
      style={styles.background} 
      source={require('../assets/pawprints.jpg')}>
      <View >
      <Text style={[styles.heading]}>Pet Patrol Lost Form</Text>        <View>
          <TextInput 
            style={styles.questions}
            placeholder="First Name"
            selectedValue={name}
            onChangeText={name => setName(name)} />
          <TextInput
            style={styles.questions}
             placeholder="Last Name"
             selectedValue={lastName}
             onChangeText={lastName => setLastName(lastName)} />
          
           <Text style={styles.heading2}>
            Type of Pet
           </Text>
            <Picker
            style={styles.questions}
            selectedValue={pet}
            onValueChange={pet => setPet(pet)}>
            <Picker.Item label="Dog" value="Dog" />
            <Picker.Item label="Cat" value="Cat" />
            <Picker.Item label="Snake" value="Snake" />
            <Picker.Item label="Rabbit" value="Rabbit" />
            <Picker.Item label="Mouse" value="Mouse" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text style={styles.heading2}>
            How long has it been missing. 
           </Text>
          <Picker
            style={styles.questions}
            selectedValue= {time}
            onValueChange={time => setTime(time)}>
              <Picker.Item label = "<1 hr"></Picker.Item>
              <Picker.Item label = "1 - 6 hr"></Picker.Item>
              <Picker.Item label = "6 hr - 1 day"></Picker.Item>
              <Picker.Item label = "1 - 4 days"></Picker.Item>
              <Picker.Item label = "4 - 10 days"></Picker.Item>
              <Picker.Item label = "10+ days"></Picker.Item>
          </Picker>
          <Text style={styles.heading2}>
            How Dangerous?
           </Text>
          <Picker
          style={styles.questions}
          selectedValue= {danger}
            onValueChange={danger => setDanger(danger)}>
          <Picker.Item label = "Always Harmless"></Picker.Item>
          <Picker.Item label = "Usually Harmless"></Picker.Item>
          <Picker.Item label = "Less often than not harmless"></Picker.Item>
          <Picker.Item label = "You will be attacked"></Picker.Item>
      </Picker>
      <Text style={styles.heading2}>
          What Color         
        </Text>
        
    
   
      <Picker
        style={styles.questions}

          selectedValue={color}
          onValueChange={pet => setColor(pet)}>
        <Picker.Item label = "Black"></Picker.Item>
        <Picker.Item label = "Red"></Picker.Item>
        <Picker.Item label = "Brown"></Picker.Item>
        <Picker.Item label = "White"></Picker.Item>
        <Picker.Item label = "Grey"></Picker.Item>
        <Picker.Item label = "Blue"></Picker.Item>
        <Picker.Item label = "Blonde"></Picker.Item>
        <Picker.Item label = "Other"></Picker.Item>
      </Picker>
      <TextInput         style={styles.questions}
placeholder='Breed' selectedValue={breed} onChangeText={breed => setBreed(breed)} />
      <TextInput style={styles.questions} placeholder='Additional Info' onSubmitEditing={Keyboard.dismiss} selectedValue={info} onChangeText={info => setInfo(info)}/>
        <Button
            title="Submit"
   
            onPress={() => {
              navigation.navigate('Flyer', {
                
                name: name,
                lastName: lastName,
                itemName: pet,
                timeStamp: time,
                colorName: color,
                danger: danger, 
                breed: breed,
                info: info
   
                
              });
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
        resizeMode: 'contain'
        
    },
    heading: {
        fontSize: 75,
        paddingVertical: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
    heading2: {
      fontSize: 20,
      paddingVertical: 15,
      textAlign: "center",
      fontWeight: "bold"
  },
    heading: {
      fontSize: 75,
      paddingVertical: 15,
      textAlign: "center",
      fontWeight: "bold"
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
        marginLeft: "auto"
    }
  });
  

export default App;