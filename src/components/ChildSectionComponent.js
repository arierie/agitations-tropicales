import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {handleFetch} from '../data/api';
import {useQueryClient} from '@tanstack/react-query';
import {useCatFacts} from '../hooks/catfactsContext';

const ChildSectionComponent = () => {
  const {data} = useCatFacts();
  const queryClient = useQueryClient();

  const fetchData = async () => {
    await handleFetch();
    queryClient.invalidateQueries(['catFacts']);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.fact}</Text>
      <TouchableOpacity style={styles.button} onPress={fetchData}>
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
