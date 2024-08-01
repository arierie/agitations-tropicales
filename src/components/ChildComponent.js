import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ChildSectionComponent from './ChildSectionComponent';

const ChildComponent = () => {
  const {fact} = useSelector(state => state);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fact}</Text>
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
