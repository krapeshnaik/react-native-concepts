import React, { Component } from 'react';
import { Text } from 'react-native';

import Card from '../../components/common/Card.js';
import CardSection from '../../components/common/CardSection.js';
import Input from '../../components/common/Input.js';

export default class LoginForm extends Component {
    render() {
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