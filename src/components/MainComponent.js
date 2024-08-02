import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useCatFacts} from '../hooks/catfactsContext';
import ChildComponent from './ChildComponent';

const MainComponent = () => {
  const {data, error, isLoading} = useCatFacts();

  console.log(data);

  if (isLoading) {
    return <Text>Loading cat fact...</Text>;
  }

  if (error) {
    return <Text>Error fetching cat fact: {error.message}</Text>;
  }

  if (!data || typeof data !== 'object') {
    return <Text>No cat facts available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data.fact}</Text>
      <ChildComponent />
      <Text style={styles.body}>length: {data.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 16,
    marginEnd: 16,
  },
  body: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'regular',
  },
});

export default MainComponent;
