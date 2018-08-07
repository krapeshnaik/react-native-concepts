/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from 'react-navigation';

import App from './App';
import AuthScreen from './components/AuthScreen.js';
import ReduxScreen from './components/ReduxScreen.js';

const RootStack = createBottomTabNavigator({
    Home: App,
    Auth: AuthScreen,
    Redux: ReduxScreen
}, {
    initialRouteName: 'Redux',
});

AppRegistry.registerComponent(appName, () => RootStack);
