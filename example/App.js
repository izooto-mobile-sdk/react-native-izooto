/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import iZooto from 'react-native-izooto';


export default class App extends React.Component {
    componentDidMount() {
      iZooto.initialize();
      iZooto.onNotificationOpenedListener(data =>{
        console.log("DeepLink Data Received",data);
      });
  
      iZooto.onNotificationReceivedListener(payload => {
        console.log("Notification Payload",payload); 
      });
  
      iZooto.onWebViewListener(landingUrl =>{
        console.log("Landing URL",landingUrl); 
      });
      iZooto.onTokenReceivedListener(token =>{
        console.log("Token Received",token);
      });

    }

    render() {
        return (
            <View>
               
                <Text> React Native Library for iZooto   Push Notifications Service </Text>

            </View>
        );
    }
}