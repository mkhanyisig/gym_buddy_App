import React from 'react';
import { StyleSheet, Text, View, Button, Image,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const win = Dimensions.get('window');

const ratio = win.width/541;

export default function Welcome({navigation }) {
  return (
    <View  style={styles.container}>
      <View>
          <Text style={styles.header}>
              Gym Buddy
          </Text>
      </View>
      <View>
      <Image
          source={require('../images/IMG_3324.jpg')}
          style={styles.stretch}
      />
      </View>
      <View>
      <Button
          title="Set Profile"
          onPress={() => navigation.navigate('Profile')}
          />
      </View>
      <View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-around',
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

 }

});
