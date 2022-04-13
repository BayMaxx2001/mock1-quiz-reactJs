import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/loginReducer'

const initialState = {
    username: '',
    password: '',
}

const LoginContext = React.createContext()

const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <LoginContext.Provider value={[state, dispatch]}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginProvider }
export const useLoginContext = () => {
    const [state, dispatch] = useContext(LoginContext)
    return [state, dispatch]
}