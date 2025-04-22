// screens/TopicScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopicScreen = ({ route }) => {
  const { topic } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{topic}</Text>
      <Text style={styles.content}>Content for {topic} will go here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});

export default TopicScreen;
