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
let formFields = null;

const emptyFields = {
  "state": "empty",
  "fname": {label: 'First Name', value: '', color: 'blue'},
  "email":{label: 'Email Address', value: '', color: 'blue'},
  "lname":{label: 'Last Name', value: '', color: 'blue'},
  "dob":{label: 'Date of Birth', value: '', color: 'blue'},
  "nickname":{label: 'Nick Name', value: '', color: 'grey'},
  "weightM":{label: "Weight", value: null, unit: "kg", color: 'blue'},
  "heightM":{label: "Height", value: null, unit: "cm", color: 'blue'},
  "weightI":{label: "Weight", value: null, unit: "lbs", color: 'blue'},
  "heightI":{label: "Height", value:"",feet:null,inches:null, unit: "ft in", color: 'blue'}
};

const defaultFields={
  "state": "default",
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



    const storeData = async (value) => {
          try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('fields', jsonValue)

            let data=value;
            // update fields
            setFName(data["fname"]["value"]);
            setLName(data["lname"]["value"]);
            setEmail(data["email"]["value"]);
            setDOB(data["dob"]["value"]);
            setNickname(data["nickname"]["value"]);

            setWeightM(data["weightM"]["value"]);
            setHeightM(data["heightM"]["value"]);
            setWeightI(data["weightI"]["value"]);
            setHeightI(data["heightI"]["value"]);
          } catch (e) {
            console.dir(e)
          }
    }

    const saveData = async (value) => {
          try {

            let ff=value
            ff["state"]="modified";
            ff["fname"]["value"]=fname;
            ff["lname"]["value"]=lname;
            ff["email"]["value"]=email;
            ff["dob"]["value"]=birthday;
            ff["nickname"]["value"]=nickname;
            ff["weightM"]["value"]=weightM;
            ff["heightM"]["value"]=heightM;

            console.log(ff)

            const jsonValue = JSON.stringify(ff)

            await AsyncStorage.setItem('fields', jsonValue)
          } catch (e) {
            console.dir(e)
          }
    }

    const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('fields')
            //console.log(jsonValue)
            let data = null
            if (jsonValue!=null) {
              data = JSON.parse(jsonValue)
              setProfile(data)
              console.log(data);

              // update fields
              setFName(data["fname"]["value"]);
              setLName(data["lname"]["value"]);
              setEmail(data["email"]["value"]);
              setDOB(data["dob"]["value"]);
              setNickname(data["nickname"]["value"]);

              setWeightM(data["weightM"]["value"]);
              setHeightM(data["heightM"]["value"]);
              setWeightI(data["weightI"]["value"]);
              setHeightI(data["heightI"]["value"]);


            } else {
              console.log("Could not get profile");
            }
          } catch(e) {
            console.dir(e)
          }
    }

    const clearData = async (value) => {
        try {
            await AsyncStorage.clear()
            setProfile(emptyFields)
            console.log("clearing profile")
            let data=emptyFields;
            // update fields
            setFName(data["fname"]["value"]);
            setLName(data["lname"]["value"]);
            setEmail(data["email"]["value"]);
            setDOB(data["dob"]["value"]);
            setNickname(data["nickname"]["value"]);

            setWeightM(data["weightM"]["value"]);
            setHeightM(data["heightM"]["value"]);
            setWeightI(data["weightI"]["value"]);
            setHeightI(data["heightI"]["value"]);

        } catch(e) {
            console.dir(e)
        }
    }

    const [profileObj,setProfile] = useState(defaultFields);
    // retrieve profile
    useEffect(() => {getData()},[])


    if(profileObj["state"]==="modified"){
        console.log(profileObj)
        let temp = profileObj;
        temp["state"]="checked"
        formFields=temp;
        setProfile(formFields);
        console.log("created default profile");
    }

    console.log(profileObj);

    // hook formFields
    const [fname,setFName] = useState(profileObj["fname"]["value"]);
    const [lname,setLName] = useState(profileObj["lname"]["value"]);
    const [email,setEmail] = useState(profileObj["email"]["value"]);
    const [birthday,setDOB] = useState(profileObj["dob"]["value"]);
    const [nickname,setNickname] = useState(profileObj["nickname"]["value"]);

    const [weightM,setWeightM] = useState(profileObj["weightM"]["value"]);
    const [heightM,setHeightM] = useState(profileObj["heightM"]["value"]);
    const [weightI,setWeightI] = useState(profileObj["weightI"]["value"]);
    const [heightI,setHeightI] = useState(profileObj["heightI"]["value"]);

    console.log("weightM : "+weightM);


    // status bar
    const [hidden, setHidden] = useState(true);
    const changeStatusBarVisibility = () => setHidden(!hidden);

    const [units, setUnits] = useState(true);
    const toggleSwitch = () => setUnits(previousState => !previousState);





    const metric=(<View>

      <View
        style={[
          styles.field,
        ]}
      >
        <Text
          style={[
            styles.label,
            styles[profileObj["weightM"].color+'Label']
          ]}
        >
        {profileObj["weightM"].label}  {profileObj["weightM"].unit && "("+profileObj["weightM"].unit+")"}
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
              {profileObj["weightM"].unit}
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
            styles[profileObj["heightM"].color+'Label']
          ]}
        >
        {profileObj["heightM"].label}  {profileObj["heightM"].unit && "("+profileObj["heightM"].unit+")"}
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
                placeholder="height cm"
                keyboardType="numeric"
              />
          }

              <Text style={styles.input}>
                {profileObj["heightM"].unit}
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
                  styles[profileObj["weightI"].color+'Label']
                ]}
              >
              {profileObj["weightI"].label}  {profileObj["weightI"].unit && "("+profileObj["weightI"].unit+")"}
              </Text>
              <View style={styles.input}>
                  {Platform.OS ==='ios'?
                        <TextInput
                          style={styles.input}
                          onChangeText={setWeightM}
                          value={profileObj["weightI"].value}
                          placeholder="weight lbs"
                          keyboardType="numeric"
                          maxLength={20}
                        >
                            {profileObj["weightI"].value}
                        </TextInput>
                        :
                        <TextInput
                          style={styles.input}
                          value={profileObj["weightI"].value}
                          placeholder="height ft"
                          keyboardType="numeric"
                          maxLength={20}
                        />
                  }

                  <Text style={styles.input}>
                    {profileObj["weightI"].unit}
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
                  styles[profileObj["heightI"].color+'Label']
                ]}
              >
              {profileObj["heightI"].label}  {profileObj["heightI"].unit && "("+profileObj["heightI"].unit+")"}
              </Text>
              <View style={styles.input}>
                {Platform.OS ==='ios'?
                    <TextInput
                      style={styles.input}
                      placeholder="height ft"
                      keyboardType="numeric"
                      maxLength={20}
                    >
                        {profileObj["heightI"].feet}
                    </TextInput>
                    :
                    <TextInput
                      style={styles.input}
                      value={profileObj["heightI"].feet}
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
                      {profileObj["heightI"].inches}
                    </TextInput>
                    :
                    <TextInput
                      style={styles.input}
                      value={profileObj["heightI"].inches}
                      placeholder="height inches"
                      keyboardType="numeric"
                    />

                }
                <Text style={styles.input}>
                      " in
                </Text>
                {
                  !profileObj["heightI"].icon &&
                  <Image source={profileObj["heightI"].icon} style={styles.icon} />
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
                        obj={profileObj["fname"]}
                        val={fname}
                        key={1}
                        id={1}
                    />
                    <PofileAttribute
                        obj={profileObj["lname"]}
                        val={lname}
                        key={2}
                        id={2}
                    />
                    <PofileAttribute
                        obj={profileObj["nickname"]}
                        val={nickname}
                        key={3}
                        id={3}
                    />
                    <PofileAttribute
                        obj={profileObj["dob"]}
                        val={birthday}
                        key={4}
                        id={4}
                    />
                    <PofileAttribute
                        obj={profileObj["email"]}
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
                      onPress={() => saveData(profileObj)}
                    >
                      <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.resetButton}
                      onPress={() => storeData(defaultFields)}
                    >
                      <Text style={styles.saveButtonText}>Reset to Default</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.clearButton}
                      onPress={() => storeData(emptyFields)}
                    >
                      <Text style={styles.saveButtonText}>Clear</Text>
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
    resetButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: 'green',
        padding: 15,
        margin: 5
      },
  clearButton: {
      borderWidth: 1,
      backgroundColor: 'red',
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
