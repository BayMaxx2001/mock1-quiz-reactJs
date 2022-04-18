import { SET_NUMBER_QUESTIONS, OFF_LOADING, ON_LOADING, SET_LIST_QUESTIONS, INC_QUESTION_ID, DEC_QUESTION_ID, OFF_LOADING_QUESTION, ON_LOADING_QUESTION, ON_LOADING_RESULT, OFF_LOADING_RESULT } from '../ConstantsAction'
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
        case SET_LIST_QUESTIONS:
            return {
                ...state,
                listQuestion: action.payload
            }
        case INC_QUESTION_ID:
            return {
                ...state,
                questionId: action.payload + 1
            }
        case DEC_QUESTION_ID:
            return {
                ...state,
                questionId: action.payload - 1
            }

        case ON_LOADING_QUESTION:
            return {
                ...state,
                loadingQuestion: true
            }

        case OFF_LOADING_QUESTION:
            return {
                ...state,
                loadingQuestion: false
            }

        case ON_LOADING_RESULT:
            return {
                ...state,
                loadingResult: true
            }

        case OFF_LOADING_RESULT:
            return {
                ...state,
                loadingResult: false
            }
        default:
            throw new Error('quesion reducer error')
    }
}

export default question_reducer