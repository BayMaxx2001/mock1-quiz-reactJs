import { USER_AUTH, ON_LOADING, OFF_LOADING } from '../ConstantsAction';
const UserAuth = (user) => {
    return {
        type: USER_AUTH,
        payload: user
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
export { UserAuth, OnLoading, OffLoading }