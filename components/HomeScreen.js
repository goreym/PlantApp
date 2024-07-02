import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useValue} from './ValueContext';
import Checker from './Checker';


function HomeScreen() {
  const {currentValue} = useValue();
  console.log('hello there');
  for (let i = 0; i < currentValue['plantWatering'].length; i++) {
    console.log('loopity loop');
    if (Checker(i)==true) {
      <Text style={styles.alert}>{JSON.stringify(currentValue['plantWatering'][index]['name'])} is thirsty!</Text>
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={styles.title}>WaterWell.</Text>
      <Text style={styles.text}>You are the proud owner of {currentValue['number']} plants!</Text>
      <Text style={styles.text}>Welcome {currentValue['name']}!</Text>
      <Text style={styles.text}>Today is {Number(new Date().getMonth())+1}/{Number(new Date().getDate())}</Text>
      {/* <Text>{JSON.stringify(currentValue['plantWatering'][0]['date'])}</Text> */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_monstera-deliciosa_medium_isabella_gold_variant.jpg?v=1712850427',
        }}
      />
    </View>
   );
 }


const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'courier',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  alert: {
    color: 'white',
    backgroundColor: 'tomato',
    fontSize: 30,
    fontFamily: 'courier',
    margin: 50,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'times',
    fontSize: 20,
 }
});


 export default HomeScreen