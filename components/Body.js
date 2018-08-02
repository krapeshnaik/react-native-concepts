import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Body = () => {
    return (
        <View style={styles.bodyContainer}>
            {
                [0,1,2].map(() => {
                    return <View style={styles.rowContainer}>
                        {
                            [0,1].map(i => {
                                return <Text style={styles.item}>body {i}</Text>
                            })
                        }
                    </View>
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        backgroundColor: '#d3d3d3'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        backgroundColor: 'green',
        width: '50%',
        margin: 10
    }
});