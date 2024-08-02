import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useCatFacts} from '../hooks/catfactsContext';
import ChildSectionComponent from './ChildSectionComponent';

const ChildComponent = () => {
  const {data} = useCatFacts();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.fact}</Text>
      <ChildSectionComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChildComponent;
