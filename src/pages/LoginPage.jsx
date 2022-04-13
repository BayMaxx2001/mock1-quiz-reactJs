import React from 'react';
import PropTypes from 'prop-types';
import { LoginProvider, useLoginContext } from '../context/loginContext';

LoginPage.propTypes = {

};

function LoginPage(props) {
    const [state, dispatch] = useLoginContext()
    const { gmail, password } = state

    console.log('gmail:', gmail)
    console.log('pass:', password)
    return (
        <LoginProvider>
            <div>
                ABCDD
            </div>
        </LoginProvider>
    );
}

export default LoginPage;