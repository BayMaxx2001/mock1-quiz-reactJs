import React from 'react';
import { useUserAuthContext } from '../context/UserAuthContext';
import { actionsUserAuth } from '../actions'

function HomePage(props) {
    const [state, dispatch] = useUserAuthContext()
    const { user } = state
    state.loading = false
    console.log('HomePage', state)
    return (
        <div>
            welcome {user.username}
        </div>
    );
}

export default HomePage;