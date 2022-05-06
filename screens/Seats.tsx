import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SeatsioSeatingChart} from '@seatsio/seatsio-react';


export default function Seats({navigation, route}){
return(
<View>
<Text>{route.params.location}</Text>

<SeatsioSeatingChart
        workspaceKey="<ec208ea9-9bb8-4e3b-b174-ab696fc57b74>"
        event="<da7e02af-d1a9-414a-a1d9-8c43d2018a89>"
        region="na"
        />
</View>
);

  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  goBackConn: {
    padding: 10,
    paddingTop: 10,
  },
  backButton: {
    width: '23%',
    textAlign: 'center',
    padding: 15,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  list: {
    marginTop: 20,
    padding: 10,
    marginBottom: 150
  },
  loadingText: {
    textAlign: 'center'
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  listEmpty: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});



