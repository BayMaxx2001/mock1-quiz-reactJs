import { LOGIN_USER } from '../ConstantsAction';
const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export { loginUser }