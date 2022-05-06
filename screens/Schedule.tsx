import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

// Custom components
import Header from '../components/header';
import GameListItem from '../components/gameListItem';


const axios = require('axios');
const cheerio = require('cheerio');

// This variable prevents useState from looping and
// continously executing an HTTP request, which will
// lead to a memory overflow and cuase the app to be very slow.
let getList = true;


export default function Schedule({route, navigation}){

  // Static fields
  const sportName = route.params.sportName;
  getList = route.params.getList;


  // Dynamic fields. These are used in asyncrounous operations
  var [schedule, setSchedule] = useState(null);
 
  // Today's date
  const today = new Date();

  

  var url;

  // Getting correct URL for HTTP request
  if (sportName == 'Baseball') {
    url = 'https://charlotte49ers.com/sports/baseball/schedule/2022?grid=true';
  } else if (sportName == 'Football') {
    url = 'https://charlotte49ers.com/sports/football/schedule/2022?grid=true';
  } else if (sportName == 'Mens Basketball') {
    url = 'https://charlotte49ers.com/sports/mens-basketball/schedule/2021-22?grid=true';
  } else if (sportName == 'Womens Basketball') {
    url = 'https://charlotte49ers.com/sports/womens-basketball/schedule/2021-22?grid=true';
  } else if (sportName == 'Mens Soccer') {
    url = 'https://charlotte49ers.com/sports/mens-soccer/schedule/2021?grid=true';
  } else if (sportName == 'Womens Soccer') {
    url = 'https://charlotte49ers.com/sports/womens-soccer/schedule/2021?grid=true';
  } else {
    url = 'https://charlotte49ers.com/sports/womens-volleyball/schedule/2021?grid=true';
  }


  // Getting the list of games using this asyncrounous function from the axios module
  axios(url)
  .then(res => {

    const html = res.data;
    const $ = cheerio.load(html);

    const games = [];


    // Counter for element key
    let i = 0;

    // Get Opponent name
    // Full CSS selector is '.sidearm-schedule-game sidearm-schedule-home-game'
    // To get only the home games, pass '.sidearm-schedule-home-game' as the first
    // arguement in $('', html)
    $('.sidearm-schedule-home-game', html).each(function() {


      let game = new Object();

      // Get fields for each game object in the html table element
      //  from each sport schedule web page
      const date = $(this).find('td:nth-child(1)').text().toString().replace(/\s+/g, '');
      const time = $(this).find('td:nth-child(2)').text().toString().replace(/\s+/g, '');
      const oppName = $(this).find('td:nth-child(4)').text().toString().replace(/\s+/g, '');
      const location = $(this).find('td:nth-child(5)').text().toString().replace(/\s+/g, '');

      // Getting only the year of each game
      let year = date.split("").reverse().join("").replace(/\D/g, "").slice(0, 4);
      year = year.split("").reverse().join("");

      // Getting month of each game
      let month = date.slice(0, 3);

      game.oppName = oppName;
      game.date = date;
      game.time = time;
      game.location = location;
      game.year = year;
      game.month = month;
      game.key = i;
      i++;

      // Only showing upcoming games for the current year and month
      if (year == today.getFullYear() && getMonthNum(game.month) > today.getMonth()) {
        games.push(game);
      }
      

    });


    // Stop async render loop
    if (getList) {


      if (games.length === 0) {
        setSchedule({oppName: 'No Upcoming Games this Season', key: -1})
      } else {
        setSchedule(games);
      }
      
      getList = false;
      
    }

  })
  .catch(err => console.log(err));



  // This functions handles the UI componets
  // according to the HTTP request made
  // by the axios object on line 56
  function renderList() {

    // Queue loading animation while waiting for the results
    // of the HTTP response
    if (schedule == null) {
      return (
        
        <View style={styles.loadingView}>
          <Text style={styles.loadingText}>Loading</Text>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>

      )
    }

    // Show list if the HTTP response
    // is a populated list
    if (schedule.length > 0) {
      return (
        <View style={styles.list}>
          <FlatList
                data={schedule}
                renderItem={({ item }) => (
      
                  <GameListItem item={item} />
      
      
                )}
              />
          
        </View>
      )
    } else {

      Alert.alert('No Games', 'There are no upcoming games right now. We hope to see you next season!')

      return (
        <View style={styles.loadingView}>
          <Text>No Upcoming Games Right Now :(</Text>
        </View>
      )
    }
      

  }


  


  return (
    <View style={styles.container}>

      {/* Header */}
      <Header title={sportName}/>
      

      {/* View or list */}
      { renderList() }


      
      

      <StatusBar style="auto" />
    </View>
  );
} // End of Schedule function




// Getting the month number according to the month abbreviation
function getMonthNum(monthAbr) {

  if (monthAbr == 'Jan') {
    return 1;

  } else if (monthAbr == 'Feb') {
    return 2;
  } else if (monthAbr == 'Mar') {
    return 3;
    
  } else if (monthAbr == 'Apr') {
    return 4;
    
  } else if (monthAbr == 'May') {
    return 5;
    
  } else if (monthAbr == 'Jun') {
    return 6;
    
  } else if (monthAbr == 'Jul') {
    return 7;
    
  } else if (monthAbr == 'Aug') {
    return 8;
    
  } else if (monthAbr == 'Sep') {
    return 9;
    
  } else if (monthAbr == 'Oct') {
    return 10;
    
  } else if (monthAbr == 'Nov') {
    return 11;
    
  } else  {
    return 12;
    
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
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



