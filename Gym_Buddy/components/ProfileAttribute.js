import React, {useState} from 'react';
import { StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity,
        Dimensions,
        Platform,
        TextInput, }
        from 'react-native';

const variables = {
	dpSize: 150,
	marginH: 50,
	blue: '#27b4e4',
	greyText: '#d3d8da',
	greyLine: '#f0f0f0',
};

const win = Dimensions.get('window');

export default function PofileAttribute(props) {

  const field=props.obj;

  return (
    <View
      style={[
        styles.field,
        field.color === 'blue' ? styles.borderlined : {}
      ]}
      key={props.id}
    >
      <Text
        style={[
          styles.label,
          styles[field.color+'Label']
        ]}
      >
      {field.label}  {field.unit && "("+field.unit+")"}
      </Text>
      <View style={styles.input}>
        {Platform.OS ==='ios'?
              <TextInput
                  
                  style={styles.input}>
                {props.val}
              </TextInput>
              :
              <TextInput
                  value={props.val}
                  style={styles.input}
              />
        }
        {
          !field.icon &&
          <Image source={field.icon} style={styles.icon} />
        }
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

export {variables};
