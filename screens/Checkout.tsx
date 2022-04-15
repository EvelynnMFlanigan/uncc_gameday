
import { StatusBar } from "expo-status-bar";
import React, { useState,Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

          /*export default function Checkout({navigation}: RootTabScreenProps<'Checkout'>) */
         export default class Checkout extends Component{
              constructor(props){
              super(props);

              this.state = {
              tableHead: ['Checkout'],
              //widthArr:[390],//390 is about max size
              spacer:[''],
              tableTitle: ['General Public', 'Youth Ticket'],
              tableData: [
                      ['Number of Tickets','', 'Cost',''],
                      [' '],
                      ['Number of Youth Tickets',' ', 'Cost', ' '],
                      [''],
                      ['','','Subtotal:',' '],
                      ['','','Tax:',' '],
                      ['','','Total:',' '],
                      ['']
                      ]
                  }
              }
              // borderStyle={{borderWidth: 2, borderColor: "#c8e1ff", borderTop: "black"}}

              render(){
                  const state = this.state;
                  return(
                      <View style ={styles.container}>
                      <Table style ={styles.table} borderStyle={{borderWidth: 1, borderColor: "#c8e1ff"}} >

                          <Row  data={state.tableHead} style={styles.head} widthArr={state.widthArr} textStyle={styles.headerText}/>
                          <Row data={state.spacer} style={styles.spacer} borderStyle={{borderWidth:2, borderColor: "black"}} />

                          <Rows  data={state.tableData} textStyle={styles.text}/>
                          <Row data={state.spacer} style={styles.spacer}  borderStyle={{borderWidth: 2, borderColor: "black"}} />
                      </Table>

                      <TouchableOpacity style={styles.checkoutBtn}>
                              <Text style={styles.checkoutText}>Checkout</Text>
                            </TouchableOpacity>
                      </View>
                  )
                 }
               }





 //Styling
 const styles = StyleSheet.create({

 container:{
 flex:1,
 backgroundColor: "#FFFFFF",//"#00573F",
 alignItems: "center",
 justifyContent:"center",
 },

 //for the table
 head:{
 height:90,
 },

 text: {
 fontSize: 15
 },

 headerText:{
 textAlign:"center",
 fontWeight:"bold",
 fontSize: 40
 },

 checkoutBtn: {
     width: "80%",
     borderRadius: 25,
     height: 50,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 40,
     backgroundColor: "#b3a369",
 },
 checkoutText: {
       fontWeight:"bold",
       fontSize:20,
 },

 spacer:{
 borderBottomColor: "#000000",
 },

 table:{
 width: "100%",
 },


 });