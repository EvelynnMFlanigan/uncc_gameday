import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';


export default function GameListItem({ item }) {
    return (
        <View>
            <TouchableOpacity style={styles.item} onPress={() => console.log(item)} >
                <View style={styles.container}>

                    <Text style={styles.title}>{item.oppName}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.location}> {item.location}</Text>
                    
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    item: {
        padding: 16,
        marginTop: 16,
        marginBottom: 5,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: 100,
        backgroundColor: '#00573F'
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    date: {
        paddingTop: 5,
        color: 'white'
    },
    location: {
        color: 'white'
    }
});