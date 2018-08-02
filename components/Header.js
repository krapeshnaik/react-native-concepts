import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from './common';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        const { viewStyle, textContainerStyle, textStyle } = styles,
            { navigate } = this.props.navigation;

        return (
            <View style={viewStyle}>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>
                        Tiles
                    </Text>
                    <Button 
                        title="Auth"
                        onPress={() => {
                            navigate('Auth', { name: 'Jane' })
                        }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#26a69a'
    },
    textContainerStyle: {
        flexDirection: 'row'
    },
    textStyle: {
        flex: 2,
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15
    }
});