import React from 'react';
import { View } from 'react-native';

import Header from './components/Header.js';
import Albums from './components/Albums.js';

export default HomeScreen = () => (
    <View style={styles.container}>
        <Header />
        <Albums />
    </View>
);

const styles = {
    container: {}
};