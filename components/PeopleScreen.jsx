import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import placeHolderImage from '../assets/placeholder-image.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    margin: 5,
    height: 100,
    width: 100
  },
  scroll: {
    flex: 1
  }
});

const PeopleScreen = () => {
  const images = [];

  const handleButtonPress = () => {
    Alert.alert('You tapped the button!');
  };

  for (let i = 0; i < 20; i += 1) {
    images[i] = (
      <TouchableOpacity key={i} onPress={handleButtonPress}>
        <Image source={placeHolderImage} key={i} style={styles.image} />
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>{images}</View>
    </ScrollView>
  );
};

export default PeopleScreen;
