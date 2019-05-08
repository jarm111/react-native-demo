import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import appIcon from '../assets/tgpa-icon.png';
import headerTitleStyle from '../utils/headerTitleStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 100,
    margin: 30,
    width: 100
  },
  heading: {
    fontSize: 26,
    marginBottom: 10
  },
  description: {
    fontSize: 12
  }
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={appIcon} style={styles.icon} />
      <Text style={styles.heading}>The Generic People App</Text>
      <Text style={styles.description}>
        The app displays data from Random User Generator Web API
      </Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
  headerTitleStyle
};

export default HomeScreen;
