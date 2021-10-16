import React, {useState} from 'react';
import { StyleSheet,
        Text,
        View,
        Image,Button,
        ScrollView,
        TouchableOpacity,
        TextInput,
        Switch,
        Dimensions,
        StatusBar }
        from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const win = Dimensions.get('window');

const ratio = win.width/541;

const variables = {
	dpSize: 150,
	marginH: 50,
	blue: '#27b4e4',
	greyText: '#d3d8da',
	greyLine: '#f0f0f0',
};


const formFields = [
	{label: 'First name', value: 'Mkhanyisi', color: 'grey'},
	{label: 'Email Address', value: 'fabolax@gmail.com', color: 'grey'},
	{label: 'Last name', value: 'Gamedze', color: 'blue'},
	{label: 'Nick Name', value: 'MK', color: 'blue'},
	{label: "Weight", value: 91.6, unit: "kg", color: 'blue'},
  {label: "Height", value: 185, unit: "cm", color: 'blue'}
]


//export default class SettingsScreen extends React.Component {
export default function SettingsScreen({navigation }){
    // status bar
    const [hidden, setHidden] = useState(true);
    const changeStatusBarVisibility = () => setHidden(!hidden);

    const [units, setUnits] = useState(true);
    const toggleSwitch = () => setUnits(previousState => !previousState);




    return (
      <View style={styles.container}>
        <StatusBar
              animated={true}
              backgroundColor="#61dafb"
              hidden={hidden}
          />
        <View style={styles.intext}>

          <Text style={styles.header}>Update Profile</Text>

          <ScrollView>

            <View style={styles.nav}>
                    {/* back icon */}
                    <Image
                      source={{
                          uri: 'https://glowstrengthandfitness.com/wp-content/uploads/2017/12/training-icon.png',
                        }}
                      style={{
                        height: win.height*0.3,
                        width: win.width*0.5
                      }}
                    />
             </View>


              <View style={styles.toggle}>
                    <Switch
                          trackColor={{ false: "#F00", true: "#0000FF" }}
                          onValueChange={toggleSwitch}
                          value={units}
                    />
                    <Text> {units? "Metric (UK)":"Imperial (USA)"}</Text>
              </View>

              <View style={styles.inputContainer}>
                  {
                    formFields.map((field, i) =>
                          <View
                            style={[
                              styles.field,
                              field.color === 'blue' ? styles.borderlined : {}
                            ]}
                            key={i}
                          >
                            <Text
                              style={[
                                styles.label,
                                styles[field.color+'Label']
                              ]}
                            >
                            {field.label}
                            </Text>
                            <View style={styles.input}>
                              {}
                              <Text style={styles.input}>
                                {field.value}
                              </Text>
                              {
                                !field.icon &&
                                <Image source={field.icon} style={styles.icon} />
                              }
                            </View>

                            </View>
                        )
                  }
              </View>
              <TextInput
                style={styles.input}
                placeholder="Weight"
                maxLength={20}
              />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#FFFDE4',
  },
  toggle:{
      alignItems: "flex-end",
      margin: 10,
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
},
nav: {
		alignItems: 'center',
	},
  field: {
		marginHorizontal: win.width*0.05,
		marginBottom: 30,
	},
	label: {
		marginBottom: 3,
		fontWeight: "bold",
	},
  borderlined: {
		borderBottomWidth: 1,
		borderBottomColor: variables.greyLine,
	},
  'greyLabel': {
		color: variables.greyText,
	},

	'blueLabel': {
		color: variables.blue,
	},
  input: {
		marginBottom: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

});
