import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function GameListItem({ item , navigation}) {

    return (
        <View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Seats',
            {location: item.location,})} >
                <View style={styles.container}>

                    <Text style={styles.title}>{item.oppName}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text> {item.location}</Text>

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
        backgroundColor: 'rgba(86, 189, 110, 0.87)'
    },
    title: {
        fontSize: 20
    },
    date: {
        paddingTop: 5
    }
});