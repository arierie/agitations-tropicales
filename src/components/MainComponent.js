import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {fetchFacts} from '../store/actions/fetchCats';
import {useSelector, useDispatch} from 'react-redux';

const MainComponent = () => {
  const {fact, length, isLoading, error} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading cat fact...</Text>;
  }

  if (error) {
    return <Text>Error fetching cat fact: {error.message}</Text>;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{fact}</Text>
      <Text>{length}</Text>
    </View>
  );
};

export default MainComponent;
