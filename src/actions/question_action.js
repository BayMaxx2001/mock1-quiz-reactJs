import { SET_NUMBER_QUESTIONS, ON_LOADING, OFF_LOADING, SET_LIST_QUESTIONS, INC_QUESTION_ID, DEC_QUESTION_ID, ON_LOADING_QUESTION, OFF_LOADING_QUESTION, ON_LOADING_RESULT, OFF_LOADING_RESULT } from '../ConstantsAction'

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

const SetListQuestion = (listQuestion) => {
    return {
        type: SET_LIST_QUESTIONS,
        payload: listQuestion
    }
}

const IncQuestionId = (indexQuestion) => {
    return {
        type: INC_QUESTION_ID,
        payload: indexQuestion
    }
}

const DecQuestionId = (indexQuestion) => {
    return {
        type: DEC_QUESTION_ID,
        payload: indexQuestion
    }
}

const OnLoadingQuestion = () => {
    return {
        type: ON_LOADING_QUESTION,
    }
}

const OffLoadingQuestion = () => {
    return {
        type: OFF_LOADING_QUESTION,
    }
}

const OnLoadingResult = () => {
    return {
        type: ON_LOADING_RESULT,
    }
}
const OffLoadingResult = () => {
    return {
        type: OFF_LOADING_RESULT,
    }
}

export { OnLoading, OffLoading, SetNumberQuestion, SetListQuestion, IncQuestionId, DecQuestionId, OnLoadingQuestion, OffLoadingQuestion, OnLoadingResult, OffLoadingResult }