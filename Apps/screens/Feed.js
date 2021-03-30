import React from 'react';
import {TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View, ScrollView} from "react-native";

function LostPets(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require('../assets/pawprints.jpg')}>
            <Text style={styles.title}>Feed</Text>
            <ScrollView style={styles.postContainer}>
                <TouchableOpacity>
                    <Text style={[styles.lostFoundTitle, styles.found]}>Found</Text>
                    <View style={[styles.post, styles.found]}>
                        <View style={styles.lostFoundContainer}>
                            <Image style={styles.icon}
                            source={require('../assets/doge.jpg')}>
                            </Image>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Doge</Text>
                            <Text style={styles.description}>Aurora, IL</Text>
                            <Text style={styles.description}>3 Days</Text>
                        </View>
                    </View>
                    <View style={styles.userTimestamp}>
                        <Text style = {styles.username}>PetPatroller417</Text>
                        <Text style = {styles.timestamp}>3/15/2021 8:30 PM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.lostFoundTitle, styles.lost]}>Lost</Text>
                    <View style={[styles.post, styles.lost]}>
                        <View style={styles.lostFoundContainer}>
                            <Image style={styles.icon}
                            source={require('../assets/cat1.jpg')}>
                            </Image>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Elmo</Text>
                            <Text style={styles.description}>Naperville, IL</Text>
                            <Text style={styles.description}>5 Days</Text>
                        </View>
                    </View>
                    <View style={styles.userTimestamp}>
                        <Text style = {styles.username}>PuppyLover444</Text>
                        <Text style = {styles.timestamp}>3/15/2021 6:30 PM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.lostFoundTitle, styles.found]}>Found</Text>
                    <View style={[styles.post, styles.found]}>
                        <View style={styles.lostFoundContainer}>
                            <Image style={styles.icon}
                            source={require('../assets/cat3.jpg')}>
                            </Image>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Ace</Text>
                            <Text style={styles.description}>Chicago, IL</Text>
                            <Text style={styles.description}>3 Hours</Text>
                        </View>
                    </View>
                    <View style={styles.userTimestamp}>
                        <Text style = {styles.username}>CatLadyZee</Text>
                        <Text style = {styles.timestamp}>3/28/2021 9:30 PM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.lostFoundTitle, styles.lost]}>Lost</Text>
                    <View style={[styles.post, styles.lost]}>
                        <View style={styles.lostFoundContainer}>
                            <Image style={styles.icon}
                            source={require('../assets/cat2.jpg')}>
                            </Image>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.name}>Elmo</Text>
                            <Text style={styles.description}>Schaumburg, IL</Text>
                            <Text style={styles.description}>7 days</Text>
                        </View>
                    </View>
                    <View style={styles.userTimestamp}>
                        <Text style = {styles.username}>PeppaPig777</Text>
                        <Text style = {styles.timestamp}>3/28/2021 10:30 PM</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
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
    },

    found: {
        backgroundColor: '#34eb83',
    },

    lost: {
        backgroundColor: '#f55b38'
    },

    lostFoundContainer: {
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
    },

    lostFoundTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 4,
        marginBottom: -4,
    },

    statusContainer: {
        padding: 20,
        backgroundColor: "#ffffff",
    },

    status: {
        backgroundColor: "#38b6f5",
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 20,
    },

    userTimestamp: {
        flexDirection: 'row',
        marginBottom: -4,
        borderWidth: 4,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    },

    username: {
        fontWeight: 'bold',
        fontSize: 10,
        paddingLeft: 10,
    },

    timestamp: {
        fontSize: 10,
        paddingRight: 15,
    }
})

export default LostPets;