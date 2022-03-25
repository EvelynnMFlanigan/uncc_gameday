import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

// Custom components
import Header from '../components/header';
import GameListItem from '../components/gameListItem';


export default function App() {

  const [schedule, setSchedule] = useState([
    {title: "UNCC vs. WakForest", date: "03-26-22", location: 'Home', key: '1'},
    {title: "UNCC vs. UNC", date: "04-02-22", location: 'Home', key: '2'},
    {title: "Appalachian vs. UNCC", date: "04-09-22", location: 'Away', key: '3'},
    {title: "Duke vs. UNCC", date: "04-16-22", location: 'Away', key: '4'},
  ]);

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header />

      {/* Top buttons container */}
      <View style={styles.goBackConn}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={{color: 'white'}}>Go Back</Text>
        </TouchableOpacity>
        <View>

        </View>
      </View>

        {/* View or list */}
        <View style={styles.list}>
          <FlatList
            data={schedule}
            renderItem={({ item }) => (

              <GameListItem item={item} />


            )}
          />
      </View>



      <StatusBar style="auto" />
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
    marginBottom: 20,
  }
});
