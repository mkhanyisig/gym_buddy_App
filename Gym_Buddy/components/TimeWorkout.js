import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function TimeWorkout({navigation }) {
  const [timer, setTimer] = useState(1)
  const [time,setTime]=useState("00:00:00")

  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setTime(formatTime())
    console.log("start");
    setIsActive(true)
    setIsPaused(true)
    console.log("ispaused: "+isPaused)

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
    console.log("Reset");
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
    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
            Timed Workout
      </Text>
      <View>
            <View style={styles.time}>
                <Text style={styles.time}> {time}</Text>
            </View>
            <View style={styles.buttons}>
            {
              !isActive && !isPaused ?
                <Button title="Start" onPress={handleStart}/>
                : (
                  isPaused ? <Button title="Pause" onPress={handlePause}/> :
                    <Button title="Resume" onPress={handleResume}/>
                )
            }
            <Button title="Reset" onPress={handleReset} disabled={!isActive}/>
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
    fontSize:25,
    padding:25,
    color:"red",
    backgroundColor:'black',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  time: {
    fontSize:42,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
