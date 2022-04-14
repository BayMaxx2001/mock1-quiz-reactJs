import { Button, Form, Input, message, Space, Spin } from 'antd'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { userAuthRegister } from '../../apis/userAuth_apis';
import { SmileOutlined } from '@ant-design/icons';
import { useUserAuthContext } from '../../context/UserAuthContext';
import { actionsUserAuth } from '../../actions'


const successNotification = () => {
    message.success('Register succesfully');
};

const errorNotification = (data) => {
    message.error(data)
}

function FormRegister(props) {

    const navigate = useNavigate();
    const [state, dispatch] = useUserAuthContext();
    const { loading } = state;

    // console.log('FormLogin', state)
    // console.log('loading', loading)


    const onFinish = (values) => {
        delete values.rePassword;
        const userAuthRegisterAPI = async (user) => {
            await dispatch(actionsUserAuth.OnLoading())
            const { success, data } = await userAuthRegister(user);
            console.log('Form Register Data:', data)
            await dispatch(actionsUserAuth.OffLoading())
            if (success) {
                successNotification();
                setTimeout(() => {
                    navigate('/')
                }, 500);

            } else {
                errorNotification(data);
                //alert(data)
            }
        }
        userAuthRegisterAPI(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: 200, marginBottom: 50 }} >Register</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                            message: 'Please input a valid email ex:"abc@example.com"'
                        }
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 8,
                            message: 'Password must be minimum 8 characters.'
                        },
                        {
                            pattern: new RegExp('^(?=.*[a-z])(?=.*[0-9])'),
                            message: 'Password must contain at least 1 letter and 1 number'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Re-password"
                    name="rePassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your re-password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject("Re-password is not match!")
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Link to="/">Do you have account aready?</Link>
                        {loading && (<Spin />)}
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormRegister;