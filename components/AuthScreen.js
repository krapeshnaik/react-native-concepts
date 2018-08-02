import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import LoginForm from './LoginForm.js';
import { Button, CardSection, Spinner } from './common';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: ''
        };
    }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCI6W_8mfSxT-5I2W6J9M51Rijo_H1tN48',
            authDomain: 'redu-bff6c.firebaseapp.com',
            databaseURL: 'https://redu-bff6c.firebaseio.com',
            projectId: 'redu-bff6c',
            storageBucket: 'redu-bff6c.appspot.com',
            messagingSenderId: '947722311008'
        });

        firebase
            .auth()
            .onAuthStateChanged(user => {
                console.log(user);
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
            })
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );

            case false:
                return <LoginForm />;

            default:
                return (
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    spinnerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};