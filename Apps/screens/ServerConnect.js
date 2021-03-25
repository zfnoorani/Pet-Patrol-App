import { response } from 'express'
import react from 'react'
import React, {Component} from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'

export default class ServerConnect extends Component{
    constructor(props){
        super(props)
        this.state= {
            response: "Welcome"

        }
    }
    connect = () =>{
        const URL = "http://localhost:3000/";
        fetch(URL).then(response=>{
            if(response.status==200){
                return response.text();
            }
            else{
                throw new Error("Not working");
            }
        }).then(responseText=>{
                this.setState({response: responseText});

        }).catch(error => {
                console.error(error.message);
        });
        

    }
    render(){
        return(
            <View>
                <Text>
                    {this.state.response}
                    <Button title="Click here to connect" onPress={this.connect}></Button>
                </Text>
            </View>    
        )
    }
}
