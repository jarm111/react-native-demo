import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import placeHolderImage from '../assets/placeholder-image.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    margin: 10,
    marginBottom: 30,
    height: 150,
    width: 150
  },
  info: {
    fontSize: 20,
    marginBottom: 15
  }
});

const PersonDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={placeHolderImage} style={styles.image} />
      <Text style={styles.info}>Name: Simon</Text>
      <Text style={styles.info}>Age: 54</Text>
      <Text style={styles.info}>Country: Spain</Text>
    </View>
  );
};

export default PersonDetailsScreen;
