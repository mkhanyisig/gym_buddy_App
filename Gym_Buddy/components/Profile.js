import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView,TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.intext}>
          <Text style={styles.header}>Please enter your Profile Info</Text>
          <ScrollView>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="First name"
                  maxLength={20}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Last name"
                  maxLength={20}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Weight"
                  maxLength={20}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Height"
                  maxLength={20}
                />
              </View>
              <View style={styles.inputContainer}>
                    <TouchableOpacity
                      style={styles.saveButton}
                    >
                      <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
              </View>
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  intext: {
      justifyContent: "space-around"
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
  paddingTop: 15
},
textInput: {
  borderColor: '#CCCCCC',
  borderTopWidth: 1,
  borderBottomWidth: 1,
  height: 50,
  fontSize: 25,
  paddingLeft: 20,
  paddingRight: 20
}
});
