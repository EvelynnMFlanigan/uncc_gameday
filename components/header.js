import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';

export default function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};



const styles = StyleSheet.create({

    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#00573F'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10
    }

});