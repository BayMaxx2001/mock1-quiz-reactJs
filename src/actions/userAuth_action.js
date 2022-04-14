import { USER_AUTH, ON_LOADING, OFF_LOADING, REFRESH_TOKEN } from '../ConstantsAction';
const UserAuth = (user) => {
    return {
        type: USER_AUTH,
        payload: user
    }
}
const RefreshTokenAction = (token) => {
    return {
        type: REFRESH_TOKEN,
        payload: token
    }
}
const OnLoading = () => {
    return {
        type: ON_LOADING
    }
}

const OffLoading = () => {
    return {
        type: OFF_LOADING
    }
}
export { UserAuth, OnLoading, OffLoading, RefreshTokenAction }