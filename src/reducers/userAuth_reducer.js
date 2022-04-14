import { USER_AUTH, ON_LOADING, OFF_LOADING, REFRESH_TOKEN } from "../ConstantsAction"

const userAuth_reducer = (state, action) => {
    switch (action.type) {
        case USER_AUTH:
            // const newState = { ...state }
            // newState.user = action.payload.user;
            // newState.tokens = action.payload.tokens;
            return {
                ...state,
                user: action.payload.user,
                tokens: action.payload.tokens
            }
        case REFRESH_TOKEN:
            return {
                ...state,
                tokens: action.payload
            }
        case ON_LOADING:
            return {
                ...state,
                loading: true
            }

        case OFF_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            throw new Error('Error reducer')
    }
}

export default userAuth_reducer