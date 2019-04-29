import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import PeopleScreen from './PeopleScreen';

const AppNavigator = createStackNavigator(
  { Home: HomeScreen, People: PeopleScreen },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
