import { Button, Form, InputNumber, Row, Spin, message } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { userAuthLogout } from '../../apis/userAuth_apis';
import { useQuestionContext } from '../../context/QuestionContext';
import { actionsQuestion } from '../../actions'
import { removeLocalStorageUser } from '../../utility/helpers';
export default function InputNumberQuiz() {

    const navigate = useNavigate();
    const [state, dispatch] = useQuestionContext()
    console.log('InputNumberQuiz state', state)
    const { loading } = state

    const user = JSON.parse(localStorage.getItem('user'))
    const onFinish = (values) => {
        dispatch(actionsQuestion.OnLoading())
        setTimeout(() => {
            dispatch(actionsQuestion.OffLoading())
        }, 200)
        console.log(values)
        dispatch(actionsQuestion.SetNumberQuestion(values.numbersquestion))
        navigate('/do-quiz')
        message.success(`Let'start you have ${values.numbersquestion} questions `);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleLogout = async () => {
        navigate('/')
        const refreshToken = localStorage.getItem('refreshTokenUser')
        await userAuthLogout(refreshToken)
        removeLocalStorageUser();
    }

    return (
        <div>
            <Row justify="center" style={{ marginTop: 10 }}>
                <div>
                    <b>Welcome: {user.username} </b>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </Row>
            <Row justify="center" style={{ marginTop: 10 }}>
                <h1>Number of questions want do!</h1>
            </Row>
            <Form
                style={{ marginTop: 30 }}
                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 6,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Number Of Question"
                    name="numbersquestion"
                    rules={[
                        {
                            required: true,
                            message: 'Please input number of qustions!',
                        },
                        {
                            type: 'number',
                            message: 'Please input a number > 0',
                            min: 1
                        }
                    ]}
                >
                    <InputNumber style={{ width: 400 }} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    {loading && (<Spin style={{ marginLeft: 30 }} />)}
                </Form.Item>
            </Form>
        </div>
    )
}
