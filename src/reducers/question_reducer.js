import { SET_NUMBER_QUESTIONS, OFF_LOADING, ON_LOADING } from '../ConstantsAction'
const question_reducer = (state, action) => {
    switch (action.type) {
        case SET_NUMBER_QUESTIONS:
            return {
                ...state,
                numberQuestion: action.payload,
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
            throw new Error('quesion reducer error')
    }
}

export default question_reducer