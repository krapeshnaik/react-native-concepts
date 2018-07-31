import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import Button from './Button.js';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Input from './Input.js';
import Spinner from './Spinner.js';

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
            .catch(e => {
                this.setState({ loading: false });

                // Create user
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch(e => {
                        this.setState({
                            loading: false,
                            error: e.message
                        });
                    });
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
        color: 'red',
        alignSelf: 'center'
    }
}