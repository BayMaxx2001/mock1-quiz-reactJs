import React, { useEffect, useRef } from 'react';
import { Button, Card, Radio, Row, Space, Spin } from 'antd';

import { useQuestionContext } from '../../context/QuestionContext';
import { useNavigate } from 'react-router-dom';
import { actionsQuestion } from '../../actions';
import { getQuestionUsers } from '../../apis/question_apis'
import { userAuthLogout } from '../../apis/userAuth_apis';
import { removeLocalStorageUser } from '../../utility/helpers';
DoQuiz.propTypes = {

};

function DoQuiz(props) {
    const [state, dispatch] = useQuestionContext()
    const { questionId, listQuestion, loadingQuestion, loadingResult, numberQuestion } = state
    const user = JSON.parse(localStorage.getItem('user'))

    const answers = useRef([])
    const totalQuestions = useRef(0)
    const navigate = useNavigate();

    const getQuestionFromApi = async (numberQuestion) => {
        //dispatch(actionsQuestion.OnLoadingQuestion)
        const { success, data } = await getQuestionUsers(numberQuestion)

        if (success) {
            totalQuestions.current = data.results.length
            answers.current = data.results.map(question => {
                return {
                    id: question.id,
                    correctanswer: question.answers1
                }
            })
            //dispatch(actionsQuestion.setQuestion(data.results))
            //dispatch(actionsQuestion.OffLoadingQuestion)
        } else {
            alert(data)
        }
    }

    useEffect(() => {
        getQuestionFromApi(numberQuestion)
    }, [numberQuestion])

    const onRadioChange = (e) => {
        answers.current[questionId].correctanswer = e.target.value
    }

    const clickNext = () => {
        //dispatch(actionsQuestion.IncQuestionId)
    }

    const clickPrevious = () => {
        //dispatch(actionsQuestion.DecQuestionId)
    }
    const userSubmit = async () => {

    }
    const clickSubmit = () => {
        userSubmit(answers.current)
    }

    const handleLogout = async () => {
        navigate('/')
        const refreshToken = localStorage.getItem('refreshTokenUser')
        await userAuthLogout(refreshToken)
        removeLocalStorageUser();
    }


    return (
        <div>
            <Row justify="center" style={{ marginTop: 10 }}>
                <div><b>Welcome: {user.username} </b><a onClick={handleLogout}>Logout</a></div>
            </Row>
            <Space align="center" direction="vertical" style={{ display: 'flex', marginTop: 100 }}>
                {loadingQuestion && (<Spin style={{ marginBottom: 80 }} />)}
                {
                    listQuestion.length > 0 &&
                    (<div>
                        <p>{`Question ${questionId + 1}/${totalQuestions.current}`}</p>
                        <Card title={listQuestion[questionId]?.question} style={{ width: 1000 }}>

                            <Radio.Group
                                defaultValue={answers.current[questionId]?.correctanswer}
                                onChange={onRadioChange}
                                key={listQuestion[questionId].id}>
                                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                    <Radio value={listQuestion[questionId].answer1}>{listQuestion[questionId].answer1}</Radio>
                                    <Radio value={listQuestion[questionId].answer2}>{listQuestion[questionId].answer2}</Radio>
                                    <Radio value={listQuestion[questionId].answer3}>{listQuestion[questionId].answer3}</Radio>
                                    <Radio value={listQuestion[questionId].answer4}>{listQuestion[questionId].answer4}</Radio>
                                </Space>
                            </Radio.Group>
                        </Card>
                    </div>
                    )
                }
                <Space size="middle" style={{ marginTop: 30 }}>
                    <Button type="primary" shape="round" disabled={questionId === 0} onClick={clickPrevious}> Previous </Button>
                    {questionId === listQuestion.length - 1 ?
                        (<Button type="primary" shape="round" onClick={clickSubmit} danger> Submit</Button>)
                        :
                        <Button type="primary" shape="round" onClick={clickNext}> Next & Save</Button>
                    }
                </Space>
                {
                    loadingResult && (<Spin style={{ marginTop: 20 }} />)
                }
            </Space>
        </div>
    );
}

export default DoQuiz;