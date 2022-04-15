import React from 'react';
import PropTypes from 'prop-types';
import DoQuiz from '../../components/user/DoQuiz';

DoQuizPage.propTypes = {

};

function DoQuizPage(props) {
    console.log('DoQuizPage')
    return (
        <div>
            <h1>Quiz test</h1>
            <DoQuiz></DoQuiz>
        </div>
    );
}

export default DoQuizPage;