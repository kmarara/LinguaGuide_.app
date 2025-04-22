// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TopicScreen from './screens/TopicScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Topic" component={TopicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
