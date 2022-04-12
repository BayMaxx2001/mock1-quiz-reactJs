import { LOGIN_USER } from '../actions_constants';
const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export { loginUser }