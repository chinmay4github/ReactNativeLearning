import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('Chinmay');
  const [age,setAge] = useState('24');

  const clickHandler = () => {

    setName('Mohan Das') ;
    setAge('34');

  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text>Enter Your Name:</Text>
        <TextInput 
        style={styles.input}
        placeholder="e.g John Doe"
        onChangeText ={(val) => setName(val)}
        />
       
        <Text style={styles.boldText}>My name is {name}</Text>

        <Text>Enter Your Age:</Text>
        <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder="e.g 99"
        onChangeText ={(val) => setAge(val)}
        />
       
        <Text style={styles.boldText}>My age is {age}</Text>


      </View>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}>

        </Button>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f79878',
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20
  },
  boldText:{
    fontWeight:'bold',

  },
  body:{

    backgroundColor:"yellow",
    padding:20

  },
  buttonContainer:{
    marginTop: 20,


  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200,


  }

});

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     alignItems:'center',
//     justifyContent:'center',
//   },
// });


