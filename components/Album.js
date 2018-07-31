import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

export default Album = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album,
        {
            albumStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            thumbnailStyle,
            headerTextStyle,
            imageStyle
        } = styles;

    return (
        <Card style={albumStyle}
            key={title}>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                {/* <Image 
                    style={imageStyle}
                    source={{uri: image}}
                /> */}
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    albumStyle: {
        margin: 10,
        height: 200,
        backgroundColor: '#039be5'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    }
};