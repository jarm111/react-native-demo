import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
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

const PeopleScreen = ({ navigation, screenProps }) => {
  if (screenProps.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  const images = [];

  const handleButtonPress = () => {
    navigation.navigate('PersonDetails');
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

PeopleScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};
