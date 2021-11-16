import React from 'react';
import { StyleSheet, Text, View, Button, Image,Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const win = Dimensions.get('window');

const ratio = win.width/541;

const AppButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default function Welcome({navigation }) {
  return (
    <View  style={styles.container}>
      <View style={styles.topbtn}>
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
                />
      </View>
      <View style={styles.headerView}>
          <Text style={styles.header}>
              Gym Buddy Workouts 💪
          </Text>
      </View>
      <View style={styles.imageView}>
      <Image
          source={require('../images/IMG_3324.jpg')}
          tintColor='#fff'
          style={styles.stretch}
      />
      <Text>
          Let's get it!!
      </Text>
      </View>
      <View style={styles.botbtn}>
            <Button
                title="Workouts"
                color="red"
                onPress={() => navigation.navigate('Workouts')}
                />
      </View>
      <View style={styles.botbtn}>
            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
                />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE4',
    justifyContent:'space-around',
  },
  topbtn:{
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginRight: win.width*0.05,
      paddingTop: 25,
  },
  botbtn:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  headerView:{
      flex: 4,
      alignItems: "center"
  },
  imageView:{
    flex: 10,
      alignItems: "center"
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'white',
  },
  stretch: {

    width: win.width*0.8,
    height: 362 * ratio,
    borderRadius: win.width*0.8 / 2,
    overflow: "hidden",
    borderWidth: 3,
    opacity: 0.8,
 }

});
