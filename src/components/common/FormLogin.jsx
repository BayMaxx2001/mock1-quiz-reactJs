import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Space, Spin } from 'antd'
import { useLoginContext } from '../../context/loginContext';
import { useFormik } from 'formik'

function FormLogin(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [state, dispatch] = useLoginContext()
    const { gmail, password } = state


    const onFinish = (values) => {
        setLoading(true)
        console.log('Success:', values);
        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: 200, marginBottom: 50 }} >Login</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 9,
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
                        { min: 8, message: 'Password must be minimum 8 characters.' },
                    ]}
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
                        {/* <a onClick={() => { navigate('/register') }} >Create account</a> */}
                        {loading && (<Spin style={{ marginLeft: 30 }} />)}
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormLogin;