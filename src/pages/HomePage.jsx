import React from 'react';
import { useUserAuthContext } from '../context/UserAuthContext';

import { Link } from 'react-router-dom';

function HomePage(props) {
    const [state, dispatch] = useUserAuthContext()
    const { user } = state

    console.log('HomePage', state)
    return (
        <div>
            welcome {user.username}
            <Link to={'/input-num-quiz'}>
                Input Page
            </Link>
        </div>
    );
}

export default HomePage;