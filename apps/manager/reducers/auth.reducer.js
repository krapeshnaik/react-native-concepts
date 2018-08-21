// Default initial state
const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMAIL_CHANGED':
            return {
                ...state,
                email: action.payload
            };

        case 'PASSWORD_CHANGED':
            return {
                ...state,
                password: action.payload
            };

        case 'SHOW_LOADER':
            return {
                ...state,
                loading: true
            };

        case 'HIDE_LOADER':
            return {
                ...state,
                loading: false
            };

        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.user
            };

        case 'LOGIN_USER_FAIL':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
}