import React from 'react';
import { View, TextInput } from 'react-native';

export default Input = ({ text, placeholder, onChangeText, secureTextEntry }) => {
    const { containerStyle, inputStyle } = styles;

    return (
        <View style={containerStyle}>
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
    inputStyle: {
        flex: 3,
        color: '#000',
        textAlign: 'center',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18
    }
};