import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button,ImageBackground, Keyboard, SafeAreaView, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';


const App = ({navigation}) => {
  
    const [pet, setPet] = useState('Dog');
    const [time, setTime] = useState('<1 hour');
    const [color, setColor] = useState('Black');
    const [name, setName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [danger, setDanger] = useState('Dangerous');
    console.log(lastName)
    
   
   
   
   
    
   
    return (
      <SafeAreaView>
    <ScrollView>
      <ImageBackground
      style={styles.background} 
      source={require('../assets/pawprints.jpg')}>
      <View >
        <Text >Find Pet Form </Text>
        <View>
          <TextInput 
            placeholder="First Name"
            selectedValue={name}
            onChangeText={name => setName(name)} />
          <TextInput
             placeholder="Last Name"
             selectedValue={lastName}
             onChangeText={lastName => setLastName(lastName)} />
          
           <Text style={styles.baseText}>
            Type of Pet
           </Text>
            <Picker
            selectedValue={pet}
            onValueChange={pet => setPet(pet)}>
            <Picker.Item label="Dog" value="Dog" />
            <Picker.Item label="Cat" value="Cat" />
            <Picker.Item label="Snake" value="Snake" />
            <Picker.Item label="Rabbit" value="Rabbit" />
            <Picker.Item label="Mouse" value="Mouse" />
            <Picker.Item label="NGN" value="Naira" />
          </Picker>
          <Text style={styles.baseText}>
            How long has it been missing. 
           </Text>
          <Picker
            selectedValue= {time}
            onValueChange={time => setTime(time)}>
              <Picker.Item label = "<1 hr"></Picker.Item>
              <Picker.Item label = "1 - 6 hr"></Picker.Item>
              <Picker.Item label = "6 hr - 1 day"></Picker.Item>
              <Picker.Item label = "1 - 4 days"></Picker.Item>
              <Picker.Item label = "4 - 10 days"></Picker.Item>
              <Picker.Item label = "10+ days"></Picker.Item>
          </Picker>
          <Text style={styles.baseText}>
            How Dangerous?
           </Text>
          <Picker
          selectedValue= {danger}
            onValueChange={danger => setDanger(danger)}>
          <Picker.Item label = "Always Harmless"></Picker.Item>
          <Picker.Item label = "Usually Harmless"></Picker.Item>
          <Picker.Item label = "Less often than not harmless"></Picker.Item>
          <Picker.Item label = "You will be attacked"></Picker.Item>
      </Picker>
      <Text style={styles.baseText}>
          What Color         
        </Text>
        
    
   
      <Picker
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
      <TextInput style={styles.textify} placeholder='Breed' onSubmitEditing={Keyboard.dismiss}/>
      <TextInput style={styles.textify} placeholder='Additional Info' onSubmitEditing={Keyboard.dismiss}/>
        <Button
            title="Submit"
   
            onPress={() => {
              navigation.navigate('Flyer', {
                name: name,
                lastName: lastName,
                itemName: pet,
                timeStamp: time,
                colorName: color,
                danger: danger 
            
                
            
              });

              
            }}
    />
   
        </View>
      </View>
      </ImageBackground>
      </ScrollView>
      </SafeAreaView>
    );
    
  };
  const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain'
        
    }
  });
  

export default App;