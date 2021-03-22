import React from 'react';
import {TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View} from "react-native";

function LostPets(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require('../assets/pawprints.jpg')}>
            <Text style={styles.title}>Lost Pets</Text>
            <View style={styles.postContainer}>
                <TouchableOpacity>
                    <View style={styles.post}>
                        <Image style={styles.icon}
                        source={require('../assets/doge.jpg')}>
                        </Image>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Doge</Text>
                            <Text style={styles.description}>Aurora, IL</Text>
                            <Text style={styles.description}>3 Days</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.post}>
                        <Image style={styles.icon}
                        source={require('../assets/cat1.jpg')}>
                        </Image>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Elmo</Text>
                            <Text style={styles.description}>Naperville, IL</Text>
                            <Text style={styles.description}>5 Days</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.post}>
                        <Image style={styles.icon}
                        source={require('../assets/cat2.jpg')}>
                        </Image>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Mimi</Text>
                            <Text style={styles.description}>Oswego, IL</Text>
                            <Text style={styles.description}>7 Days</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.post}>
                        <Image style={styles.icon}
                        source={require('../assets/cat3.jpg')}>
                        </Image>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Jasper</Text>
                            <Text style={styles.description}>Chicago, IL</Text>
                            <Text style={styles.description}>1 Day</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
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

    description: {
        fontSize: 20,
    },

    descriptionContainer: {
        paddingLeft: 10,
        flexDirection: 'column'
    },

    icon: {
        width: 100,
        height: 100,
        paddingRight: 20,
    },

    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    postContainer: {
        flex: 1,
        flexDirection: 'column',
        
    },

    post: {
        flexDirection: 'row',
        borderWidth: 4,
        padding: 10,
        marginBottom: -4,
        backgroundColor: '#4169e1', 

    },

    title: {
        fontSize: 75,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 75,
        paddingBottom: 50,
    },
})

export default LostPets;