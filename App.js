import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from './components/Header.js';
import Albums from './components/Albums.js';

export default class App extends Component {
    static navigationOptions = {
        title: 'List',
        headerStyle: {
            backgroundColor: '#26a69a',
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

    constructor(props) {
        super(props);
    }

    render() {
        const { containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Albums />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {}
});