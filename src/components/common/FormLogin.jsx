import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Space, Spin } from 'antd'
FormLogin.propTypes = {

};

function FormLogin(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)


    return (
        <div>
            <h1>Login</h1>
            <Form>
        
            </Form>
        </div>
    );
}

export default FormLogin;