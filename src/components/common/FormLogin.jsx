import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, Input, Space, Spin, message } from 'antd'
import { userAuthLogin } from '../../apis/userAuth_apis';
import { useUserAuthContext } from '../../context/UserAuthContext'
import { actionsUserAuth } from '../../actions'
import { setLocalStorageUser } from '../../utility/helpers'
const errorNotification = (data) => {
    message.error(data)
}

function FormLogin(props) {
    const navigate = useNavigate();
    const [state, dispatch] = useUserAuthContext();
    const { loading } = state;

    // console.log('FormLogin', state)
    // console.log('loading', loading)

    const onFinish = (values) => {
        console.log('Success:', values);

        const loadTokenToLocal = async (user) => {
            await dispatch(actionsUserAuth.OnLoading())
            const { success, data } = await userAuthLogin(user)
            await dispatch(actionsUserAuth.OffLoading())

            console.log('get data API', data)
            if (success) {
                if (data.user.role === 'user') {
                    dispatch(actionsUserAuth.UserAuth(data))
                    setLocalStorageUser(data)
                    navigate('/homepage')
                } else {
                    //const tokens = data.tokens
                    // dispatch({ type: 'USER_AUTH', payload: data })
                    dispatch(actionsUserAuth.UserAuth(data))
                    setLocalStorageUser(data)
                    navigate('/homepage')
                }
            } else {
                errorNotification(data);
                // alert(data)
            }
        }
        loadTokenToLocal(values)


        // localStorage.setItem('user', res.data.user)
        // goi API -> DATA USER 
        //dispath : payload : axios tra ve
        //dispatch(res.data)
        // data user
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
                        <Link to="/register">Create account</Link>
                        {loading && (<Spin style={{ marginLeft: 30 }} />)}
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormLogin;