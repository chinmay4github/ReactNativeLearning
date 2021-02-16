import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Chinmay', id: '1' },
    { name: 'Madhusudan', id: '2' },
    { name: 'Himalyan', id: '3' },
    { name: 'Bijay', id: '4' },
    { name: 'Mohan', id: '5' },
    { name: 'Santanu', id: '6' },
    { name: 'Villna', id: '7' },
  ]);

  return (

    <View style={styles.container}>

      <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}

       data={people}
       renderItem = {({item})=> (

        <Text style={styles.items}>{item.name}</Text>
         
       )} />
      {/* <ScrollView>
        {people.map((item) => {

          return (
            <View key={item.key}>
              <Text style={styles.items}>{item.name}</Text>
            </View>
          )

        })}

      </ScrollView> */}

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
    marginHorizontal:24,
    marginBottom:24,
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


