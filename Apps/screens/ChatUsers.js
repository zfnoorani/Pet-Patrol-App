import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
    AsyncStorage,
   TextInput
  } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import { auth, fire, database } from "../../fbconfig";


export default class Users extends Component {
  constructor(){
    super()
    this.state={
      auth_data:[],
      uid:'',
      uname:'',
      uemail:''
    }
  }

  // Setup before rendering: Get current user data and list of all users
  componentWillMount=()=>{
    console.log(this.props)
    this.getData()  
    //this.User_data()
    this.getUsers()
  }

  getData = async () => {
    //let u_id = this.props.navigation.getParam('uid')
    //let u_name = this.props.navigation.getParam('userName')
    //let u_email = this.props.navigation.getParam('uemail')
    let u_id = this.props.route.params.uid
    let u_name = this.props.route.params.username
    let u_email = this.props.route.params.email
    this.setState({
          uid:u_id,
          uname:u_name,
          uemail:u_email
       })
  }

  // Print to console the current user
  componentDidMount=()=>{
    console.log(
      'uid = '+this.state.uid+
      '  username2=> '+this.state.uname+
      '  useremail2=> '+this.state.uemail
    )
    console.log(this.state)
  }

  getUsers=()=>{
    let users=[]
    var docRef = fire.collection("Users")
    docRef.get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        users.push(doc.data())
        console.log(users)
      })
    })
    .then(()=>{
      console.log("finished")
      console.log(users)
      this.setState({auth_data:users})})
    
  }

  render() {
    let Data=this.state.auth_data
    console.log('data')
    console.log(Data)
    console.log("After test...")
    let User=Data.map((u_data)=>{
        console.log('u_data')
        console.log(u_data)
        // Show all other users
        if (this.state.uid != u_data.uid){
          return(
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('ChatRoom',{
              uemail:this.state.uemail,
              uid:this.state.uid,
              username:this.state.uname,
              fid:u_data.uid,
              fname:u_data.username,
              femail:u_data.email
            })}>
              <View style={styles.listing}>
                    <View style={styles.list}  >
                          <View> 
                              <TouchableOpacity >
                                  <Image style={styles.user_icon} source={require('../assets/doge.jpg')} />
                              </TouchableOpacity>
                          </View>
                          <View> 
                            <Text style={styles.username}> {u_data.username}</Text>
                          </View>
                      </View>
                  
                </View>
              </TouchableOpacity>
          )
        }
      })
    return (
      <View style={styles.container}>
        <ImageBackground
            style={styles.background}
            source={require("../assets/pawprints.jpg")}>
          <View style={styles.top_header}>
            <Image style={styles.header_icon} source={require('../assets/paw.png')}></Image>
            <Text style={styles.header_text}>Chat with fellow Pet Patrollers</Text>
            <Image style={styles.header_icon} source={require('../assets/paw.png')}></Image>
          </View>
          <View style={styles.home_padding}>
              <ScrollView>
                  {User}
              </ScrollView>
          </View>
          </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
  listing: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft:10,
    borderWidth: 3,
    marginBottom: -3,
    backgroundColor: "#363636",
    flexDirection: 'row',
    //justifyContent: 'center'
  },
  top_header: {
    backgroundColor: "#5c5c5c",
    padding:10,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header_icon: {
    width:30,
    height:30,
    marginRight: 5,
    marginLeft: 5,
  },
  header_text: {
    color: '#16aef5',
    fontWeight: 'bold',
    fontSize: 20,
  },
  user_icon: {
    width: 70, 
    height: 70,
    borderRadius:85, 
    top:0, 
    left:0,
  },
  home_padding: {
      padding:10,
      //backgroundColor: "#363636",
      flex: 1
  },
  username:{color: '#16aef5', fontSize: 35, marginLeft: 5},
  list:{
      //width: '100%',
      flexDirection: 'row',
      borderBottomColor:'#e3e3e1',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:0,
      paddingBottom:0,
    },
})