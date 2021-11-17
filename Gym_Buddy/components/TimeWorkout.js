import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function TimeWorkout({navigation }) {
  const [time,setTime]=useState("00:00:00")
  const [timer, setTimer] = useState(3595)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    console.log(`${getHours} : ${getMinutes} : ${getSeconds}`)
    const tm=`${getHours} : ${getMinutes} : ${getSeconds}`
    setTime(tm)
    //return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
            Timed Workout
      </Text>
      <View>
            <Text> {time}</Text>
            <View style={styles.buttons}>
                <Button title="Start" onClick={handleStart}/>
                <Button title="Pause" onClick={handlePause}/>
                <Button title="Resume" onClick={handleResume}/>
                <Button title="Reset" onClick={handleReset}/>
            </View>

      </View>
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
