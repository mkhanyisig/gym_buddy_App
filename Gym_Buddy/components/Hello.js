import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Hello({navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Hi, Welcome to Gym Buddy App by Mkhanyisi!
      </Text>
      <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
