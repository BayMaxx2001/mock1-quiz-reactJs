import React, { useContext, useReducer } from 'react'
import question_reducer from '../reducers/question_reducer'
import logger from '../utility/logger'


const initialState = {
    loading: false,
    loadingResult: false,
    loadingQuestion: false,
    numberQuestion: localStorage.getItem('numberQuestion'),
    listQuestion: [],
    questionId: 0,
    result: localStorage.getItem('result')
}

const QuestionContext = React.createContext()

const QuestionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(logger(question_reducer), initialState)
    return (
        <QuestionContext.Provider value={[state, dispatch]}>
            {children}
        </QuestionContext.Provider>
    )
}

export { QuestionProvider, QuestionContext }
export const useQuestionContext = () => {
    const [state, dispatch] = useContext(QuestionContext)
    return [state, dispatch]
}