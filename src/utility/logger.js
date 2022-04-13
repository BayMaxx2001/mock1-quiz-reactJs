import loginReducer from '../reducers/loginReducer';


function loggerLogin(reducer) {
    return (prevState, action) => {
        console.group(action.type);

        console.log('prev state', prevState)
        console.log('action', action)

        const newState = loginReducer()

        console.log('new state', newState)

        console.groupEnd();
        return newState
    }
}

export default loggerLogin