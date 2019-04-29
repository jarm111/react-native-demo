import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import PeopleScreen from './PeopleScreen';

export default createBottomTabNavigator({
  Home: HomeScreen,
  People: PeopleScreen
});
