/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';

import App from './App';
import AuthScreen from './components/AuthScreen.js';
import ReduxScreen from './components/ReduxScreen.js';

const RootStack = createStackNavigator({
    Home: App,
    Auth: AuthScreen,
    Redux: ReduxScreen
}, {
    initialRouteName: 'Redux',
});

AppRegistry.registerComponent(appName, () => RootStack);
