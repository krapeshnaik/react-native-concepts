/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';

import App from './App';
import AuthScreen from './components/AuthScreen.js';

const RootStack = createStackNavigator({
    Home: App,
    Auth: AuthScreen
}, {
    initialRouteName: 'Home',
});

AppRegistry.registerComponent(appName, () => RootStack);
