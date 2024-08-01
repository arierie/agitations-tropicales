import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fetchFacts} from '../store/actions/fetchCats';
import {useSelector, useDispatch} from 'react-redux';
import ChildComponent from './ChildComponent';

const MainComponent = () => {
  const {fact, length, isLoading, error} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  console.log('fact:', fact);

  if (isLoading) {
    return <Text>Loading cat fact...</Text>;
  }

  if (error) {
    return <Text>Error fetching cat fact: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{fact}</Text>
      <ChildComponent />
      <Text style={styles.body}>length: {length}</Text>
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
