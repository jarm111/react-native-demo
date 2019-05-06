import React from 'react';
import { StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithImage from './ButtonWithImage';

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

  const handleButtonPress = () => {
    navigation.navigate('PersonDetails');
  };

  const images = screenProps.peopleImages.map(person => (
    <ButtonWithImage
      key={person.id}
      onPress={handleButtonPress}
      source={{ uri: person.picUri }}
    />
  ));

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
