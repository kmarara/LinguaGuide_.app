// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const topics = ['Introduction', 'Numbers', 'Time', 'Verbs'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to French Learning!</Text>
      {topics.map((topic, index) => (
        <Button
          key={index}
          title={topic}
          onPress={() => navigation.navigate('Topic', { topic })}
          color="#4CAF50"
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
