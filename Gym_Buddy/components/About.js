import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function About({navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Gym Buddy is an App Idea created by for COSI 153a: Mobile App Development in Fall 2021 by Mkhanyisi Gamedze
      </Text>
      <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
