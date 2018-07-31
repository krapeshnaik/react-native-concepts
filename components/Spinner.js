import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default Spinner = ({ size }) => {
    return (
        <View styles={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};