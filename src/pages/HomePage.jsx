import React from 'react';
import { useUserAuthContext } from '../context/UserAuthContext';


function HomePage(props) {
    const [state, dispatch] = useUserAuthContext()
    const { user } = state
    console.log('HomePage', state)
    return (
        <div>
            welcome {user.username}
        </div>
    );
}

export default HomePage;