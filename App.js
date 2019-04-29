/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;
