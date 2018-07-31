import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import LoginForm from  './LoginForm.js';

export default class Auth extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCI6W_8mfSxT-5I2W6J9M51Rijo_H1tN48',
            authDomain: 'redu-bff6c.firebaseapp.com',
            databaseURL: 'https://redu-bff6c.firebaseio.com',
            projectId: 'redu-bff6c',
            storageBucket: 'redu-bff6c.appspot.com',
            messagingSenderId: '947722311008'
          });
    }

    render() {
        return (
            <LoginForm />
        );
    }
}