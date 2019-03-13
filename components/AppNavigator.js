import { createStackNavigator, createAppContainer } from 'react-navigation';
import Tabs from './Tabs';
import Home from './Home';


const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Tabs: {screen: Tabs}
});
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;