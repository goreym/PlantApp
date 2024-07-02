import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useValue} from './ValueContext';


function AboutScreen() {
  const {currentValue,setCurrentValue} = useValue();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.paragraph}>This app is a tracking app for when you need to water your plants!
          When a plant needs to be watered today, the app will send an
          alert and have a banner stating which plants need to be watered. Happy watering!</Text>
       <TextInput style={styles.username}
         placeholder="Enter your name"
         onChangeText={(text) => {
           setCurrentValue({...currentValue, name: text});
         }}
       />
   </View> 
   )
}


const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'courier',
  },
  paragraph: {
    margin: 20,
    flexWrap: 'wrap',
    fontFamily: 'courier',
  },
  username: {
    fontFamily: 'courier',
    backgroundColor: 'darkslategrey',
    borderRadius: 5,
    padding: 20,
  }
 });




export default AboutScreen