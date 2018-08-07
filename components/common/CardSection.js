import React from 'react';
import { View } from 'react-native';

export default CardSection = ({ children }) => (
    <View style={styles.container}>
        { children }
    </View>
);

const styles = {
    container: {
        flexDirection: 'row',
        position: 'relative',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    }
};