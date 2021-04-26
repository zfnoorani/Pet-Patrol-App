import firebase from 'firebase'
import '@firebase/firestore'
import uuid from 'uuid'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Dimensions,
  TextInput,
  FlatList,
  Button,
  AsyncStorage
} from 'react-native';
import { auth, fire, database } from "./fbconfig";


class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }
  }
  authData=(email)=>{
    firebase
    .database()
    .ref('users')
    .orderByChild('emailAddress')
    .equalTo(email)
    .once('value', snap => console.log('this is authantcation data==> '+snap.val()))
  }

  login = async(user, success_callback, failed_callback) => {
    const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(success_callback, failed_callback)
  }

  loginData=()=>{
          return new Promise((resolve,reject)=>{
            auth.onAuthStateChanged(function(user) {
              if (user) {
                console.log("user: ", user);
                resolve(user)
                // User is signed in.
              } else {
                // No user is signed in.
            } 
      }) 
    }) 
  }

  observeAuth = () =>{
    auth.onAuthStateChanged(this.onAuthStateChanged);
  }
  onAuthStateChanged = user => {
    if (!user) {
      try {
        this.login(user);
      } catch ({ message }) {
        console.log("Failed:" + message)
      }
    } else {
      console.log("Reusing auth...");
    }
  }
  
  usersData=()=>{
    let all=[]
    return new Promise((resolve,reject)=>{
      var docRef = firebase.firestore().collection("chatie_user")
          docRef.get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  all.push(doc.data())
              },resolve(all)) 
          })
      })
  }
  
  onLogout = user => {
    firebase.auth().signOut().then(function() {
      console.log("Sign-out successful.");
    }).catch(function(error) {
      console.log("An error happened when signing out");
    });
  }

  get uid() {
    return (auth.currentUser || {}).uid;
  }

  get ref() {
    return database.ref('chat_messages');
  }

  refOn =(chatComponent) => {
    console.log('Retrieving chat data...')
    return new Promise((resolve,reject)=>{
        let cData=[]
        this.ref.on('child_added', function (snapshot) {
          console.log("Child added (refon)")
          const { timestamp: numberStamp, text, user,name,femail,fid } = snapshot.val();
          const { key: id } = snapshot;
          const { key: _id } = snapshot; 
          const timestamp = new Date(numberStamp);
          const message = {
            femail,
            fid,
            text,
            timestamp,
            user
          };
        cData.push(message)
        console.log('Chat data ==')
        console.log(cData)
        resolve(cData)
        chatComponent.setState({chatData:cData})
      })
    })
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  
  send=(fid,femail,text,uid,uemail,uname)=>{
    console.log('Sending message:')
    console.log(fid + ' ' + femail + ' ' + text + ' ' + uid + ' ' + uemail + ' ' + uname)
    firebase.database().ref('Messages/').push({
      'fid':fid,
      'femail':femail,
      'text':text,
      user:{
          'uid':uid,
          'uemail':uemail,
          'uname':uname
      }
      
  }).then((data)=>{
      console.log('data ' , data)
  }).catch((error)=>{
      console.log('error ' , error)
  })
  }

  refOff() {
      this.ref.off();
  }
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
