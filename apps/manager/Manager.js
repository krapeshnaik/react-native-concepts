import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers/index.js';
import LoginForm from './LoginForm.js';

export default class Manager extends Component {
    componentWillMount() {
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
        const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}