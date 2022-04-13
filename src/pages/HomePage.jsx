import React from 'react';
import PropTypes from 'prop-types';
import { LoginProvider } from '../context/loginContext';



function HomePage(props) {
    return (
        <div>
            <LoginProvider>
            </LoginProvider>
        </div>
    );
}

export default HomePage;