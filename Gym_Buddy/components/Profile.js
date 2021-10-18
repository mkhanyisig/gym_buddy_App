import React, {useState,useEffect} from 'react';
import { StyleSheet,
        Text,
        View,
        Image,Button,
        ScrollView,
        TouchableOpacity,
        TextInput,
        Switch,
        Platform,
        Dimensions,
        StatusBar }
        from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PofileAttribute, {variables} from "../components/ProfileAttribute";
import AsyncStorage from '@react-native-async-storage/async-storage';

const win = Dimensions.get('window');

const ratio = win.width/541;

function BMI(index){
    if(index<18.5){
       return "Underweight";
    }else if(index<24.9){
        return "Normal Weight";
    }else if(index<29.9){
        return "Overweight";
    }else{
        return "Obese";
    }
}


// default
let formFields = {
	"fname": {label: 'First Name', value: 'Mkhanyisi', color: 'blue'},
	"email":{label: 'Email Address', value: 'fabolax@gmail.com', color: 'blue'},
	"lname":{label: 'Last Name', value: 'Gamedze', color: 'blue'},
  "dob":{label: 'Date of Birth', value: '02/20/1996', color: 'blue'},
	"nickname":{label: 'Nick Name', value: 'MK', color: 'grey'},
	"weightM":{label: "Weight", value: 91.6, unit: "kg", color: 'blue'},
  "heightM":{label: "Height", value: 185, unit: "cm", color: 'blue'},
  "weightI":{label: "Weight", value: 202.5, unit: "lbs", color: 'blue'},
  "heightI":{label: "Height", value:"6 '1",feet:6,inches:1, unit: "ft in", color: 'blue'}
}


//export default class SettingsScreen extends React.Component {
export default function SettingsScreen({navigation}){

    const [profileObj,setProfile] = useState(formFields);

    const storeData = async (value) => {
          try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('fields', jsonValue)
          } catch (e) {
            console.dir(e)
          }
    }

    const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('fields')
            let data = null
            if (jsonValue!=null) {
              data = JSON.parse(jsonValue)
              setProfile(data)
              console.log(data.email);
            } else {
              console.log("Could not get profile");
            }
          } catch(e) {
            console.dir(e)
          }
    }

    // hook formFields
    const [fname,setFName] = useState(formFields["fname"]["value"]);
    const [lname,setLName] = useState(formFields["lname"]["value"]);
    const [email,setEmail] = useState(formFields["email"]["value"]);
    const [birthday,setDOB] = useState(formFields["dob"]["value"]);
    const [nickname,setNickname] = useState(formFields["nickname"]["value"]);

    const [weightM,setWeightM] = useState(formFields["weightM"]["value"]);
    const [heightM,setHeightM] = useState(formFields["heightM"]["value"]);


    // status bar
    const [hidden, setHidden] = useState(true);
    const changeStatusBarVisibility = () => setHidden(!hidden);

    const [units, setUnits] = useState(true);
    const toggleSwitch = () => setUnits(previousState => !previousState);


    // retrieve profile
    storeData(profileObj);
    useEffect(() => {getData()}
           ,[])
    console.log(profileObj);


    const metric=(<View>

      <View
        style={[
          styles.field,
        ]}
      >
        <Text
          style={[
            styles.label,
            styles[formFields["weightM"].color+'Label']
          ]}
        >
        {formFields["weightM"].label}  {formFields["weightM"].unit && "("+formFields["weightM"].unit+")"}
        </Text>
        <View style={styles.input}>
            {Platform.OS ==='ios'?
                  <TextInput
                    style={styles.input}
                    onChangeText={setWeightM}

                    placeholder="weight kg"
                    keyboardType="numeric"
                    maxLength={20}
                  >
                      {weightM}
                  </TextInput>
                  :
                  <TextInput
                    style={styles.input}
                    onChangeText={setWeightM}
                    value={weightM}
                    placeholder="weight kg"
                    keyboardType="numeric"
                    maxLength={20}
                  />
            }

            <Text style={styles.input}>
              {formFields["weightM"].unit}
            </Text>
        </View>
      </View>
      <View
        style={[
          styles.field,
        ]}
      >
        <Text
          style={[
            styles.label,
            styles[formFields["heightM"].color+'Label']
          ]}
        >
        {formFields["heightM"].label}  {formFields["heightM"].unit && "("+formFields["heightM"].unit+")"}
        </Text>
        <View style={styles.input}>
          {Platform.OS ==='ios'?
              <TextInput
                style={styles.input}
                placeholder="height cm"
                onChangeText={setHeightM}
                
                keyboardType="numeric"
                maxLength={20}
              >
                  {heightM}
              </TextInput>
              :
              <TextInput
                style={styles.input}
                onChangeText={setHeightM}
                value={heightM}
                placeholder="height ft"
                keyboardType="numeric"
              />
          }

              <Text style={styles.input}>
                {formFields["heightM"].unit}
              </Text>
        </View>

        </View>
      </View>)

    const imperial=(<View>

            <View
              style={[
                styles.field,
              ]}
            >
              <Text
                style={[
                  styles.label,
                  styles[formFields["weightI"].color+'Label']
                ]}
              >
              {formFields["weightI"].label}  {formFields["weightI"].unit && "("+formFields["weightI"].unit+")"}
              </Text>
              <View style={styles.input}>
                  {Platform.OS ==='ios'?
                        <TextInput
                          style={styles.input}
                          value={formFields["weightI"].value}
                          placeholder="height ft"
                          keyboardType="numeric"
                          maxLength={20}
                        >
                            {formFields["weightI"].value}
                        </TextInput>
                        :
                        <TextInput
                          style={styles.input}
                          value={formFields["weightI"].value}
                          placeholder="height ft"
                          keyboardType="numeric"
                          maxLength={20}
                        />
                  }

                  <Text style={styles.input}>
                    {formFields["weightI"].unit}
                  </Text>
              </View>
            </View>
            <View
              style={[
                styles.field,
              ]}
            >
              <Text
                style={[
                  styles.label,
                  styles[formFields["heightI"].color+'Label']
                ]}
              >
              {formFields["heightI"].label}  {formFields["heightI"].unit && "("+formFields["heightI"].unit+")"}
              </Text>
              <View style={styles.input}>
                {Platform.OS ==='ios'?
                    <TextInput
                      style={styles.input}
                      placeholder="height ft"
                      keyboardType="numeric"
                      maxLength={20}
                    >
                        {formFields["heightI"].feet}
                    </TextInput>
                    :
                    <TextInput
                      style={styles.input}
                      value={formFields["heightI"].feet}
                      placeholder="height ft"
                      keyboardType="numeric"
                    />
                }

                    <Text style={styles.input}>
                      '
                    </Text>
                {Platform.OS ==='ios'?
                    <TextInput
                      style={styles.input}
                      placeholder="height inches"
                      keyboardType="numeric"
                      maxLength={20}
                    >
                      {formFields["heightI"].inches}
                    </TextInput>
                    :
                    <TextInput
                      style={styles.input}
                      value={formFields["heightI"].inches}
                      placeholder="height inches"
                      keyboardType="numeric"
                    />

                }
                <Text style={styles.input}>
                      " in
                </Text>
                {
                  !formFields["heightI"].icon &&
                  <Image source={formFields["heightI"].icon} style={styles.icon} />
                }
              </View>

              </View>
      </View>)



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
                          trackColor={{ false: "#Eaf4fc", true: "#0000FF" }}
                          onValueChange={toggleSwitch}
                          value={units}
                    />
                    <Text> {units? "Metric (UK)":"Imperial (USA)"}</Text>
              </View>

              <View style={styles.inputContainer}>
                    {
                      /*
                      formFields.map((field, i) =>
                            <PofileAttribute
                                obj={field}
                                key={i}
                                id={i}
                            />
                          )
                          */
                    }
                    <PofileAttribute
                        obj={formFields["fname"]}
                        val={fname}
                        key={1}
                        id={1}
                    />
                    <PofileAttribute
                        obj={formFields["lname"]}
                        val={lname}
                        key={2}
                        id={2}
                    />
                    <PofileAttribute
                        obj={formFields["nickname"]}
                        val={nickname}
                        key={3}
                        id={3}
                    />
                    <PofileAttribute
                        obj={formFields["dob"]}
                        val={birthday}
                        key={4}
                        id={4}
                    />
                    <PofileAttribute
                        obj={formFields["email"]}
                        val={email}
                        key={5}
                        id={5}
                    />
              </View>
              <Text
                style={styles.inputBox}
                placeholder="Weight"
                maxLength={20}
              >
              {!units? "Imperial": "Metric"} Body Measurements {!units ? "🇺🇸 ":"🇬🇧 "}
              </Text>
              {!units? imperial: metric}

              <Text style={styles.BMIheader}>
                    Body Mass Index
              </Text>

             <Text style={styles.BMIval}>
                    {(weightM/((heightM/100)*(heightM/100))).toPrecision(3) }
             </Text>

             <Text style={styles.BMIclass}>
                  {BMI(weightM/((heightM/100)*(heightM/100)))}
             </Text>

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
  BMIheader: {
    fontSize: 32,
    textAlign: 'center',
    color: "red",
    margin: 10,
    fontWeight: 'bold'
  },
  BMIval: {
    fontSize: 42,
    textAlign: 'center',
    color: variables.blue,
    margin: 10,
    fontWeight: 'bold'
  },
  BMIclass: {
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
		justifyContent: 'space-evenly'
	},
  inputBox:{
    marginBottom: 1,
    color: variables.blue,
    fontWeight: "bold",
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: win.width*0.05,
		marginBottom: 30,
  }

});
