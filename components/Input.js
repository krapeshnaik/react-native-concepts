import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default Input = ({ label, text, placeholder, onChangeText, secureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={containerStyle}>
            {/* <Text style={labelStyle}>{label}</Text> */}
            <TextInput
                style={inputStyle}
                secureTextEntry={secureTextEntry || false}
                autoCorrect={false}
                placeholder={placeholder}
                value={text}
                onChangeText={text => onChangeText(text)} />
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        width: 100,
        paddingLeft: 20
    },
    inputStyle: {
        flex: 3,
        color: '#000',
        textAlign: 'center',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18
    }
};