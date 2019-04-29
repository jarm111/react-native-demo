import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const PeopleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PeopleScreen</Text>
    </View>
  );
};

export default PeopleScreen;
