import { SET_NUMBER_QUESTIONS, ON_LOADING, OFF_LOADING } from '../ConstantsAction'

const SetNumberQuestion = (number) => {
    return {
        type: SET_NUMBER_QUESTIONS,
        payload: number
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

export { OnLoading, OffLoading, SetNumberQuestion }