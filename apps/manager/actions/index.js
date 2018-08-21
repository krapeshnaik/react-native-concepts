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
    return dispatch => {
        dispatch({
            type: 'SHOW_LOADER'
        });
        
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                dispatch({
                    type: 'LOGIN_USER_SUCCESS',
                    user
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOGIN_USER_FAIL',
                    error
                });
            });
    };
};