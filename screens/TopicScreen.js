// screens/TopicScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import lessons from '../lessons';

const TopicScreen = ({ route }) => {
  const { topic } = route.params;
  const lesson = lessons[topic];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{topic}</Text>
      <Text style={styles.content}>{lesson.content}</Text>
      <Text style={styles.examplesTitle}>Examples:</Text>
      {lesson.examples.map((example, index) => (
        <Text key={index} style={styles.example}>{example}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  example: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default TopicScreen;
