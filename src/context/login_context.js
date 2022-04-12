import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/login_reducer'

const initialState = {

}

const LoginContext = React.createContext()

const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
}

export { LoginProvider }
export const useLoginContext = () => {
    return useContext(LoginContext)
}