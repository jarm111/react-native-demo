import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import headerTitleStyle from '../utils/headerTitleStyle';

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

const PersonDetailsScreen = ({ navigation, screenProps }) => {
  const idToMatch = navigation.getParam('pressId', 0);
  const { picUri, name, age, state } = screenProps.peopleData.find(person => {
    return person.id === idToMatch;
  });
  const textLines = [`name: ${name}`, `age: ${age}`, `location: ${state}`].map(
    content => (
      <Text key={content} style={styles.info}>
        {content}
      </Text>
    )
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: picUri }} style={styles.image} />
      {textLines}
    </View>
  );
};

PersonDetailsScreen.navigationOptions = {
  title: 'Details',
  headerTitleStyle
};

export default PersonDetailsScreen;

PersonDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};
