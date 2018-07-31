import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';

import Album from './Album.js';

export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios
            .get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        let albums = this.state.albums;

        return (
            <ScrollView>
                {
                    albums.length ?
                        albums.map((album, i) => <Album key={i} album={album} />) :
                        <Text>Loading...</Text>
                }
            </ScrollView>
        );
    }
}

const styles = {
    albums: {}
};