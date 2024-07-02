import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {useState} from 'react';
import {useValue} from './ValueContext';
import Tracker from './DayTracker';


const Item = ({ item }) => (
   <View style={styles.item}>
       <Text>Plant name: {item['name']}</Text>
       <Text>Water in {item['days']} days</Text>
   </View>
);


const ToDoList = () => {
   const [name, setName] = useState('');
   const [days, setDays] = useState();
   const [plantCounter, setPlantCounter] = useState(0);
   const {currentValue, setCurrentValue} = useValue();

   return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>WaterWell</Text> */}
            <View style={styles.addPlant}>
                <Text style={styles.title}>Add a Plant</Text>
                <TextInput
                    style={{height: 40, borderColor: 'darkslategrey', borderWidth: 1, margin: 20, fontFamily: 'times', backgroundColor: 'white'}}
                    placeholder= 'Plant name'
                    onChangeText={text => setName(text)}
                    value={name} />
                <Text style={styles.writing}>Days between watering:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'darkslategrey', borderWidth: 1, marginBottom: 20, fontFamily: 'times', backgroundColor: 'white'}}
                    placeholder= '0'
                    onChangeText={text => setDays(text)}
                    value={days} />
                <Button color='darkslategrey'
                    title="Add Plant"
                    onPress={() => {
                        let newPlants = currentValue.plants.concat({name: name, days: days, done: false});
                        date = Tracker(days)[0];
                        console.log({date});
                        let plantWatering = currentValue.plantWatering.concat({name: name, watering: days, date: date});
                        setName('');
                        setDays(0);
                        setCurrentValue({...currentValue, number: plantCounter+1, plants: newPlants, plantWatering: plantWatering});
                        setPlantCounter(plantCounter+1);
                    }} />
            </View>
            <FlatList
               data={currentValue.plants}
               renderItem={({item}) =>  <Item item={item}/> }
               keyExtractor={item => item['name']}
            />
            {/* <Text>{plantCounter}</Text> */}
            {/* <Text>{JSON.stringify(currentValue)}</Text> */}
        </View>
   );
   }


const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'white',
       alignItems: 'center',
       justifyContent: 'center',   
    },
    addPlant: {
        backgroundColor: 'lavender',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 300,
    },
    item: {
        backgroundColor: 'lavender',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor:'darkslategrey',
        borderWidth: 3,
        borderRadius: 10,
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'times',
    },
    writing: {
        fontFamily: 'times',
    }
});


export default ToDoList;