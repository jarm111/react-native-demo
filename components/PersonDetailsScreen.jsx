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

const PersonDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PersonDetailsScreen</Text>
    </View>
  );
};

export default PersonDetailsScreen;
