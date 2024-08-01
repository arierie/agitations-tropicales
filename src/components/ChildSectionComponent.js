import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFacts} from '../store/actions/fetchCats';

const ChildSectionComponent = () => {
  const {fact} = useSelector(state => state);

  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchFacts());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fact}</Text>
      <TouchableOpacity style={styles.button} onPress={handleFetch}>
        <Text style={styles.buttonText}>Fetch Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0ff00',
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

export default ChildSectionComponent;
