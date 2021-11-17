import React from 'react';
import { StyleSheet, Text, View, Button,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Workouts({navigation }) {
  const workoutLogs=[
    {num: 0,title:'Leg Day', Date: "09/20/2021"},
    {num: 1,title: 'Back day',Date: "09/21/2021"},
    {num: 2,title: 'Core',Date: "09/25/2021"},
    {num: 3,title: 'Cardio',Date: "09/30/2021"},
    {num: 4,title: 'Core + Cardio',Date: "10/02/2021"},
    {num: 5,title: 'Back day',Date: "10/03/2021"},
    {num: 6,title: 'Leg day',Date: "10/05/2021"},
    {num: 7,title: 'Arm day',Date: "10/08/2021"},
    {num: 8,title: 'Chest day',Date: "10/11/2021"},
    {num: 9,title: 'Core day',Date: "10/14/2021"},
    {num: 10,title: 'Chest day',Date: "10/16/2021"},
    {num: 11,title: 'Stretch day',Date: "10/18/2021"},
    {num: 12,title: 'Back day',Date: "10/19/2021"},
    {num: 13,title: 'Back day',Date: "10/21/2021"},
    {num: 14,title: 'Leg day',Date: "10/22/2021"},
    {num: 15,title: 'Leg day',Date: "10/25/2021"},
    {num: 16,title: 'Cardio day',Date: "10/27/2021"},
    {num: 17,title: 'Lift day',Date: "10/28/2021"},
    {num: 18,title: 'Lift day',Date: "10/29/2021"},
    {num: 19,title: 'Chest day',Date: "10/30/2021"},
    {num: 20,title: 'Soccer day',Date: "10/31/2021"},
    {num: 21,title: 'Core day',Date: "11/01/2021"},
    {num: 22,title: 'Deadlift day',Date: "11/02/2021"},
    {num: 23,title: 'Back day',Date: "11/05/2021"},
    {num: 24,title: 'Arms day',Date: "11/06/2021"},
    {num: 26,title: 'Leg day',Date: "11/08/2021"},
    {num: 27,title: 'Chest day',Date: "11/10/2021"},
    {num: 28,title: 'Strength day',Date: "11/12/2021"},
    {num: 29,title: 'Core day',Date: "11/14/2021"},
    {num: 30,title: 'Back day',Date: "11/16/2021"},
    {num: 31,title: 'Cardio day',Date: "11/17/2021"},
    {num: 32,title: 'Cardio day',Date: "11/18/2021"},
  ];

  const renderWorkout = ({item}) => {
    //console.log(item.full_name);
    return (
      <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.Date}</Text>
     </View>
  )}



  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.header}>
              Workouts Logs
          </Text>
      </View>

          <FlatList
            data={workoutLogs}
            renderItem={renderWorkout}
            keyExtractor={item => item.num}
          />
      <View style={styles.buttonView}>
          <Button
              title="Add Workout"
              onPress={() => navigation.navigate('TimeWorkout')}
              />
      </View>
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
  },
  item: {
      backgroundColor: 'yellow',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,

    },
  title: {
    fontSize:36,
  },
  date: {
    fontSize:20,
    color: "red",
  },
  list: {

  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
});
