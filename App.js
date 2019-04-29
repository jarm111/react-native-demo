/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './components/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

export default App;
