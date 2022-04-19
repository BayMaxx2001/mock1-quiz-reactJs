import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuthContext } from '../context/UserAuthContext';
import { parseJwt, setLocalStorageUser } from '../utility/helpers'
import { refreshToken } from '../apis/userAuth_apis';
import { actionsUserAuth } from '../actions';
// const useAuth = () => {
//     const [state, dispatch] = useUserAuthContext();
//     console.log('useAuth', state)
//     // const accessTokenInLocalStorage = localStorage.getItem('accessTokenUser')
//     const refreshTokenInLocalStorage = localStorage.getItem('refreshTokenUser')
//     const payloadJWT = parseJwt(refreshTokenInLocalStorage)

//     const accessTokenExpriesTime = Number(new Date(localStorage.getItem('expires')))
//     const currentTime = Number(new Date())
//     const refreshTokenExpriesTime = Number(new Date(payloadJWT.exp))
//     if (currentTime < accessTokenExpriesTime) return true
//     if (currentTime > refreshTokenExpriesTime) return false

//     const delayTime = currentTime - accessTokenExpriesTime - 5000

//     setTimeout(() => {
//         refreshToken(refreshTokenInLocalStorage)
//             .then((res) => {
//                 dispatch(actionsUserAuth.RefreshTokenAction(res.data))
//                 console.log('refreshToken', res.data)

//                 setLocalStorageUser("accessTokenUser", res.data.access.token);
//                 setLocalStorageUser("expires", res.data.access.expires);
//                 setLocalStorageUser("refreshTokenUser", res.data.refresh.token);
//             })
//             .catch((err) => console.log(err));
//     }, delayTime)
//     return true
// }
const useAuth = () => {
    const accessTokenInLocalStorage = localStorage.getItem('accessTokenUser')
    const token = { token: accessTokenInLocalStorage };
    return token && token.token;
}

export default function Guard() {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to={'/'} />
}
