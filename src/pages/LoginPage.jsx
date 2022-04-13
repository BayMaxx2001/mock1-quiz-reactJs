import React from 'react';
import PropTypes from 'prop-types';
import { LoginProvider, useLoginContext } from '../context/loginContext';
import FormLogin from '../components/common/FormLogin';

LoginPage.propTypes = {

};

function LoginPage(props) {
    return (
        <div>
            <LoginProvider>
                <FormLogin></FormLogin>
            </LoginProvider>
        </div>
    );
}

export default LoginPage;