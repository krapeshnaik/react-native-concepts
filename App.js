import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Header from './components/Header.js';
import Albums from './components/Albums.js';

export default class App extends Component {
    static navigationOptions = {
        title: 'Tiles',
        headerStyle: {
            backgroundColor: '#26a69a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Text onPress={() => this.props.navigation.navigate('Auth')}>
                    Auth
                </Text>
                <Albums />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {}
});