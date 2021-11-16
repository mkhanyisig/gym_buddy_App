import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function TimeWorkout({navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Workouts
      </Text>
      <Button
          title="Home"
          onPress={() => navigation.navigate('TimeWorkout')}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
