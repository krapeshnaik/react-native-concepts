import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { emailChanged, passwordChanged, loginUser } from './actions';
import Card from '../../components/common/Card.js';
import CardSection from '../../components/common/CardSection.js';
import Input from '../../components/common/Input.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            loading: false
        };
    }

    render() {
        const { errorMessageStyle } = styles,
            { user, email, emailChanged, password, passwordChanged } = this.props;

        console.log(user);

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

                <Text style={errorMessageStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {
                        this.state.loading ?
                            <Spinner /> :
                            <Button onPress={() => loginUser(email, password)}>
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
        textAlign: 'center'
    }
};

const mapStateToProps = state => {
    return {
        ...state.auth
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);