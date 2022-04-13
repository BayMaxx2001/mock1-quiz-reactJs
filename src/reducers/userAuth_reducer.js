import { USER_AUTH, ON_LOADING, OFF_LOADING } from "../ConstantsAction"

const userAuth_reducer = (state, action) => {
    switch (action.type) {

        case USER_AUTH:
            console.log('old State reducer', state)

            const newState = { ...state }
            newState.user = action.payload.user;
            newState.tokens = action.payload.tokens;

            console.log(' new State reducer', newState)
            return {
                ...state,
                user: action.payload.user,
                tokens: action.payload.tokens
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