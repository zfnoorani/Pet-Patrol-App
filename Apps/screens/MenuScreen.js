import React from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet, Text, View, TextInput, Keyboard, Button} from "react-native";

function MenuScreen(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require('../assets/pawprints.jpg')}>
            <Text style={styles.menu}>Menu</Text>
                <TouchableOpacity>
                    <Text style={styles.button}>
                        Feed
                    </Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity>
                    <Text style={styles.button}>
                        Lost Posts
                    </Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity>
                    <Text style={styles.button}>
                        Found Posts
                    </Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity>
                    <Text style={styles.button}>
                        Messages
                    </Text>
                </TouchableOpacity>
        
        </ImageBackground>  
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain'
        
    },

    button: {
        fontSize: 45,
        textAlign: 'left',
        borderWidth: 4,
        padding: 10,
        backgroundColor: '#4169e1',   
    },

    menu: {
        fontSize: 75,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 75,
        paddingBottom: 100,

    },

    view: {
        backgroundColor: '#00bfff',
        flex: 1,
    }
})

export default MenuScreen;