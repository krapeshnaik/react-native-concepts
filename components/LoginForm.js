import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import Input from './common/Input.js';
import Button from './common/Button.js';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Spinner from './common/Spinner.js';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            loading: false,
            email: '',
            password: ''
        };
    }

    onButtonPress = () => {
        const { email, password } = this.state;

        this.setState({
            loading: true
        });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(e => {
                // Create user
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFailure);
            });
    }

    onLoginSuccess = () => {
        alert('login success');
        this.setState({
            error: 'dasda',
            loading: false,
            email: '',
            password: ''
        });
    }

    onLoginFailure = e => {
        this.setState({
            error: e.message,
            loading: false
        });
    }

    render() {
        const { errorMessageStyle } = styles;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="username@gmail.com"
                        text={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </CardSection>
                
                <CardSection>
                <Input
                    label="Password"
                    placeholder="********"
                    secureTextEntry={true}
                    text={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                </CardSection>

                <Text style={errorMessageStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {
                        this.state.loading ?
                        <Spinner /> :
                        <Button onPress={this.onButtonPress}>
                            Log In
                        </Button>
                    }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorMessageStyle: {
        // position: 'absolute',
        bottom: 0,
        color: 'red',
        alignSelf: 'center'
    }
}