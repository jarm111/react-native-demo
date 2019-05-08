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
    this.state = { people: {}, isLoading: true };
  }

  componentDidMount() {
    this.getPeople();
  }

  async getPeople() {
    try {
      const people = await axios.get('https://randomuser.me/api/?results=10');
      this.setState({ people, isLoading: false });
    } catch (err) {
      console.error('Error on fetch: ', err);
    }
  }

  render() {
    const { people, isLoading } = this.state;
    let peopleData = [];
    if (!isLoading) {
      peopleData = people.data.results.map(person => {
        return {
          picUri: person.picture.large,
          id: person.login.uuid,
          name: person.name.first,
          age: person.dob.age,
          state: person.location.state
        };
      });
    }

    return (
      <View style={styles.container}>
        <AppNavigator screenProps={{ isLoading, peopleData }} />
      </View>
    );
  }
}
