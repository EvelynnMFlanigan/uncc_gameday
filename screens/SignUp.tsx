import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


export default function SignUp({route, navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    return (
    <View style={styles.containerMain}>
    
        <View style={styles.container}>

        </View > 
        <Text style={styles.title}>UNCC Game Day</Text>

        {/* Name input */}
        <View style={styles.loginView}>

            <Image style={{height: 40, width: 40}} source={require('../assets/images/user_icon.png')}/>
            <TextInput style={styles.inputView}
            placeholder="Name"
            placeholderTextColor="white"
            onChangeText={(val) => setName(val)}
            />

          </View>

        {/* Email input */}
        <View style={styles.loginView}>

            <Image style={{height: 40, width: 40}} source={require('../assets/images/email_icon.png')}/>
            <TextInput style={styles.inputView}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(val) => setEmail(val)}
            />



        </View>
        {/* Password input */}
        <View style={styles.loginView}>

            <Image style={{height: 50, width: 40}} source={require('../assets/images/pass_icon.png')}/>
            <TextInput style={styles.inputView}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(val) => setPassword(val)}
            />

        </View>



        <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
            let  newUser = {email: email};
            navigation.navigate('SignIn');
            }}
        >

            <Text>Create Account</Text>

        </TouchableOpacity>




    </View>
    )
}


const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center"
    },
    container: {
      position: "relative",
      alignItems: "center"
    }
    ,
  
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingTop: 50
    },
    loginView: {
      flexWrap: "wrap",
      flexDirection: "row"
    },
    inputView: {
      backgroundColor: "#c9c9c9",
      borderRadius: 13,
      height: 40,
      width: 250,
      margin: 12,
      padding: 10,
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#b3a369",
    },
    icon: {
      width: 50,
      height: 60
    }
  });