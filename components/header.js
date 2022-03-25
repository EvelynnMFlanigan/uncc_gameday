import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Schedule</Text>
        </View>
    )
};


const styles = StyleSheet.create({

    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#035F0D'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10
    }

});