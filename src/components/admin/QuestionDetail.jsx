import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuestionContext } from '../../context/QuestionContext';
import { actionsQuestion } from '../../actions';
import { getQuestionById, updateQuestion } from '../../apis/admin_question_apis';
import { Button, Form, Input, message, Radio, Row, Space, Spin } from 'antd'
QuestionDetail.propTypes = {

};

function QuestionDetail(props) {

    const navigate = useNavigate()
    const { id } = useParams();
    const [questionDetail, setQuestionDetail] = useState()
    const [state, dispatch] = useQuestionContext()
    const { loading, loadingEdit, questionId } = state

    const getQuestionDetailById = async (idQuestion) => {
        dispatch(actionsQuestion.OnLoading())
        const { success, data } = await getQuestionById(idQuestion)

        if (success) {
            dispatch(actionsQuestion.OffLoading())
            setQuestionDetail(data)
            // dispatch(actionsQuestion.SetQuestionId())
        } else {
            alert(data)
        }
    }

    useEffect(() => {
        getQuestionDetailById(id)
    }, [id])

    const onFinish = async (values) => {
        // dispatch(actionsQuestion.OnLoadingEdit())

        const question = { ...values }
        await updateQuestion(question, id)
        message.success('Edit Question Successfully !');
        navigate('/admin-list-question')
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const clickBack = () => {
        navigate('/manage-quiz')
    }

    return (
        <div>
            <Row justify='center'>
                <h1>Question Detail</h1>
            </Row>
            <Row justify='center'>
                {loading && (<Spin style={{ marginTop: 30 }} />)}
            </Row>

            {questionDetail && (
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 9,
                    }}
                    initialValues={{
                        question: questionDetail.question,
                        answer1: questionDetail.answer1,
                        answer2: questionDetail.answer2,
                        answer3: questionDetail.answer3,
                        answer4: questionDetail.answer4,
                        correctanswer: questionDetail.correctanswer,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Question"
                        name="question"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your question!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Answer 1"
                        name="answer1"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Answer 1!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer 2"
                        name="answer2"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Answer 2!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer 3"
                        name="answer3"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Answer 3!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Answer 4"
                        name="answer4"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Answer 4!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="correctanswer" label="Correct Answer"
                        rules={[{ required: true, message: 'Please pick an answer!' }]}>
                        <Radio.Group>
                            <Radio value={questionDetail.answer1}>Answer 1</Radio>
                            <Radio value={questionDetail.answer2}>Answer 2</Radio>
                            <Radio value={questionDetail.answer3}>Answer 3</Radio>
                            <Radio value={questionDetail.answer4}>Answer 4</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Edit
                            </Button>
                            <a onClick={clickBack}>Back to dashboard</a>
                            {loadingEdit && (<Spin style={{ marginLeft: 30 }} />)}
                        </Space>
                    </Form.Item>
                </Form>

            )}
        </div>
    )
}

export default QuestionDetail;