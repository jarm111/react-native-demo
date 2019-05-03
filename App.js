/* eslint react/jsx-filename-extension: "off", no-console: "off" */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import AppNavigator from './components/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: {}, fetchDone: false };
  }

  componentDidMount() {
    this.getPeople();
  }

  async getPeople() {
    try {
      const people = await axios.get('https://randomuser.me/api/?results=1');
      this.setState({ people, fetchDone: true });
    } catch (err) {
      console.error('Error on fetch: ', err);
    }
  }

  render() {
    const { people, fetchDone } = this.state;
    if (fetchDone) console.log(people.data.results[0].gender);

    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}
