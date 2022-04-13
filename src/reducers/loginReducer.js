import { LOGIN_USER } from "../utility/constants"

const loginReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
            }
        default:
            throw new Error('Error reducer')
    }
}

export default loginReducer