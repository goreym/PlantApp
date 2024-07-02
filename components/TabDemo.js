import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import AboutScreen from './AboutScreen';
import ValueProvider from './ValueContext';


const Tab = createBottomTabNavigator();


export default function App() {
 const data = {name:'', number:0, plants:[], plantWatering:[]};
 return (
   <ValueProvider value={data}>
   <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      headerStyle: { backgroundColor: 'darkseagreen'},
      headerTitleStyle: { color: 'black', fontFamily: 'courier' },
      tabBarStyle: {
        height: 90,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: 'darkseagreen',
        position: 'absolute',
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'darkslategray',
    })}
    >
       <Tab.Screen name="Plant List" component={ListScreen} />
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="About" component={AboutScreen} />
     </Tab.Navigator>
   </NavigationContainer>
   </ValueProvider>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 8,
   borderWidth: 4,
   margin: 50,
 },
 title: {
   margin: 3,
   fontSize: 40,
   fontWeight: 'bold',
   textAlign: 'center',
 },
});
