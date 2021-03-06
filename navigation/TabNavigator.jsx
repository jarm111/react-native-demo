/* eslint react/prop-types: off */

import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import PeopleScreen from '../screens/PeopleScreen';
import PersonDetailsScreen from '../screens/PersonDetailsScreen';
import TabBarIcon from '../components/TabBarIcon';

const StackNavigatorConfig = { headerLayoutPreset: 'center' };

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  StackNavigatorConfig
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />
};

const PeopleStack = createStackNavigator(
  {
    People: PeopleScreen,
    PersonDetails: PersonDetailsScreen
  },
  StackNavigatorConfig
);

PeopleStack.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-body" />
};

export default createBottomTabNavigator({
  HomeStack,
  PeopleStack
});
