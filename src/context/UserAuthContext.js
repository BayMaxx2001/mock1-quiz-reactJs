import React, { useContext, useReducer } from 'react'
import userAuth_reducer from '../reducers/userAuth_reducer'


const initialState = {
    loading: false,
    user: {},
    tokens: {}
}

const UserAuthContext = React.createContext()


const UserAuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userAuth_reducer, initialState)
    return (
        <UserAuthContext.Provider value={[state, dispatch]}>
            {children}
        </UserAuthContext.Provider>
    )
}

export { UserAuthProvider, UserAuthContext }
export const useUserAuthContext = () => {
    const [state, dispatch] = useContext(UserAuthContext)
    return [state, dispatch]
}