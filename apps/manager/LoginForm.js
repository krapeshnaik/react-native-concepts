import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { emailChanged } from './actions';
import Card from '../../components/common/Card.js';
import CardSection from '../../components/common/CardSection.js';
import Input from '../../components/common/Input.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            error: '',
            loading: false
        };
    }

    render() {
        const { errorMessageStyle } = styles;
        console.log(this.props)
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="username@gmail.com"
                        value={this.props.email}
                        onChangeText={email => this.props.emailChanged(email)} />
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
        textAlign: 'center'
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        email: state.auth
    };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);