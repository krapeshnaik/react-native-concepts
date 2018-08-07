import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LibraryList from './LibraryList.js';
import reducers from './reducers';

export default class ReduxScreen extends Component {
    static navigationOptions = {
        title: 'Tiles',
        headerStyle: {
            backgroundColor: '#3949ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
        },
        tabBarIcon: () => {
            return <Ionicons name="ios-list" size={25} color="#ccc" />
        }
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex: 1}}>
                    <LibraryList />
                </View>
            </Provider>
        )
    }
}