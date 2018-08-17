import firebase from 'firebase';

export const emailChanged = text => {
    return {
        type: 'EMAIL_CHANGED',
        payload: text
    };
};

export const passwordChanged = pwd => {
    return {
        type: 'PASSWORD_CHANGED',
        payload: pwd
    }
};

export const loginUser = (email, password) => {
    console.log('Logging in', email, password);
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                dispatch({
                    type: 'LOGIN_USER_SUCCESS',
                    payload: user
                });
            })
            .catch(error => console.log(error));
    };
};