/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from 'react-navigation';

import App from './App';
import AuthScreen from './components/AuthScreen.js';
import ReduxScreen from './components/ReduxScreen.js';
import Manager from './apps/manager/Manager.js';

const RootStack = createBottomTabNavigator({
    Home: App,
    Auth: AuthScreen,
    Redux: ReduxScreen,
    Emp: Manager
}, {
    initialRouteName: 'Emp',
});

AppRegistry.registerComponent(appName, () => RootStack);
