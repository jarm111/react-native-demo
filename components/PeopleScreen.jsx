import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import placeHolderImage from '../assets/placeholder-image.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const PeopleScreen = () => {
  const images = [];

  for (let i = 0; i < 20; i += 1) {
    images[i] = <Image source={placeHolderImage} key={i} />;
  }

  return <ScrollView style={styles.container}>{images}</ScrollView>;
};

export default PeopleScreen;
