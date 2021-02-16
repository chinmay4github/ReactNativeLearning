import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Chinmay', key: '1' },
    { name: 'Madhusudan', key: '2' },
    { name: 'Himalyan', key: '3' },
    { name: 'Bijay', key: '4' },
    { name: 'Mohan', key: '5' },
    { name: 'Santanu', key: '6' },
    { name: 'Villna', key: '7' },
  ]);

  return (

    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {

          return (
            <View key={item.key}>
              <Text style={styles.items}>{item.name}</Text>
            </View>
          )

        })}

      </ScrollView>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f79878',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  items: {
    marginTop: 24,
    padding: 20,
    backgroundColor: "red",
    fontSize: 24


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


