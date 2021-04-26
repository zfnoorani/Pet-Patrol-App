import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    AsyncStorage,
   TextInput
  } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import firebaseSvc from '../../firebaseSDK'
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

  /*getUsers=()=>{
    let users=[]
    return new Promise((resolve,reject)=>{
      var docRef = fire.collection("Users")
          docRef.get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  users.push(doc.data())
                  this.setState({auth_data:users})
              },resolve(users)) 
          })
      })
  }*/

  /*User_data=()=>{
    firebaseSvc.usersData().then((solve)=>{
        this.setState({auth_data:solve})
    }).catch((fail)=>{
      console.log('not getting data')
    })
  }*/

  render() {
    let Data=this.state.auth_data
    console.log('data')
    console.log(Data)
    console.log(Data.length)
    let test = ['hello', 'dog'];
    console.log(test)
    test.map((user)=>{console.log(user)})
    Data.map((u)=>{console.log("???")})
    console.log("After test...")
    let User=Data.map((u_data)=>{
        console.log('u_data')
        console.log(u_data)
        return(
          <View style={styles.backarrow}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ChatRoom',{
                    uemail:this.state.uemail,
                    uid:this.state.uid,
                    username:this.state.uname,
                    fid:u_data.uid,
                    fname:u_data.username,
                    femail:u_data.email
                })}>
                <View style={styles.list}  >
                      <View  style={ styles.forwidth_left}> 
                            <TouchableOpacity >
                                <Image style={{ 
                                  width: 70, 
                                  height: 70,
                                    borderRadius:87, 
                                    position:'absolute', 
                                    top:0, 
                                    left:0 
                                  }} source={require('../assets/images/no_image.jpg')} />
                            </TouchableOpacity>
                        </View>
                      <View style={ styles.forwidth_right}> 
                        <Text style={ styles.price}> {u_data.username}</Text>
                          <Text style={ styles.carname}> {u_data.email}</Text> 
                      </View>
                  </View>
              </TouchableOpacity>
            </View>

        )
      })
    return (
      <View style={styles.container}>
          <TouchableOpacity>
              <View style={styles.top_header}  >
                    <TouchableOpacity>
                      <Image style={styles.nav_icon} source={require('../assets/images/nav.png')} />
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <View style={styles.search_header} >
                            <Image style={styles.search_icon} source={require('../assets/images/search.png')} />
                            <TextInput  style={styles.search_box} 
                            keyboardType='web-search'
                            placeholder='search name'/>
                        </View> 
                    </TouchableOpacity> 
                </View>
          </TouchableOpacity>	
          <View style={styles.home_padding}>
              <ScrollView>
                  {User}
              </ScrollView>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  backarrow: {
    paddingBottom: 50,
    flexDirection: 'row',
  },
  top_header: {
    backgroundColor: "#ffffff",
    padding:10,
    flexDirection: 'row',
},
nav_icon: {
    width:40,
    height:40,
},
search_header: {
    width: screenWidth - 100,
    flexDirection: 'row',
},
search_icon: {
    width:30,
    height:30,
    margin:5,
},
search_box: {
    //height: 40,
    paddingTop: 10,
    //paddingBottom: 5,
    borderBottomColor: '#fff',
    color:'#000000',
    fontSize: 15,
    opacity:1,
    width: screenWidth - 200,
    borderBottomWidth: StyleSheet.hairlineWidth,
    //fontFamily:"Poppins"
},
home_padding: {
    padding:10,
    backgroundColor: "#ffffff",	
    flex: 1
},
list_img: {
    width:'100%',
    height:115,
    marginRight: 4,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
},
forwidth_left:{
         width:'30%',
         //paddingBottom:30
    },
    forwidth_right:
    {width:'50%'
},
price:{color: '#0b85bd',fontSize: 18, /* paddingTop:20 */}, 
carname:{color: '#010000',fontSize: 10,}, 
     list_img: {
		width:'100%',
		height:115,
		marginRight: 4,
		borderTopLeftRadius:8,
		borderTopRightRadius:8,
    },
    list:{
      width: '100%',
    flexDirection: 'row',
    borderBottomColor:'#e3e3e1',
     // borderBottomWidth:2 ,
     paddingTop:0,
    paddingBottom:0,
    
		//marginTop: 3,
		//width: screenWidth / 2 - 30,
		//marginRight: 20		
	},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})