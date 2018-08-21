import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import * as actions from './actions';
import Card from '../../components/common/Card.js';
import CardSection from '../../components/common/CardSection.js';
import Input from '../../components/common/Input.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            errorMessageStyle,
            buttonContainerStyle
        } = styles;
        const {
            error,
            loading,
            email,
            emailChanged,
            password,
            passwordChanged,
            loginUser
        } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="username@gmail.com"
                        value={email}
                        onChangeText={email => emailChanged(email)} />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="********"
                        secureTextEntry={true}
                        text={password}
                        onChangeText={password => passwordChanged(password)} />
                </CardSection>

                {
                    error ?
                        <Text style={errorMessageStyle}>{error.message}</Text> :
                        null
                }

                <CardSection>
                    {
                        loading ?
                            <Spinner /> :
                            <View style={buttonContainerStyle}>
                                <Button onPress={() => loginUser(email, password)}>
                                    Log In
                                </Button>

                                <Button onPress={() => signupUser(email, password)}>
                                    Sign Up
                                </Button>
                            </View>
                    }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    buttonContainerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    errorMessageStyle: {
        color: 'red',
        textAlign: 'center'
    }
};

const mapStateToProps = state => {
    return {
        ...state.auth
    };
};

export default connect(mapStateToProps, actions)(LoginForm);