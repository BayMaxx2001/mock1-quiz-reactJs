import axios from "axios";
import { refreshTokenAPI } from "./userAuth_apis";
import { parseJwt } from '../utility/helpers'
import { Navigate } from "react-router-dom";

axios.defaults.baseURL = 'https://fwa-ec-quiz-mock1.herokuapp.com';

axios.interceptors.request.use(async (req) => {
    // console.log('interceptors', req)
    if (localStorage.getItem('accessTokenUser') != null) {
        const accessTokenInLocalStorage = localStorage.getItem('accessTokenUser')
        const refreshTokenInLocalStorage = localStorage.getItem('refreshTokenUser')
        const payloadJWT = parseJwt(refreshTokenInLocalStorage)
        console.log("accessTokenInLocalStorage", accessTokenInLocalStorage)
        const accessTokenExpriesTime = Number(new Date(localStorage.getItem('expires')))
        const currentTime = Number(new Date())
        const refreshTokenExpriesTime = Number(new Date(payloadJWT.exp))
        if (currentTime > refreshTokenExpriesTime) {
            <Navigate to={'/'} />
        }
        if (currentTime < accessTokenExpriesTime) {
            req.headers = {
                ...req.headers,
                Authorization: `Bearer ${accessTokenInLocalStorage}`,
            }
        }

        await refreshTokenAPI(refreshTokenInLocalStorage)
            .then((res) => {
                //dispatch(actionsUserAuth.RefreshTokenAction(res.data))
                localStorage.setItem("accessTokenUser", res.data.access.token);
                localStorage.setItem("expires", res.data.access.expires);
                localStorage.setItem("refreshTokenUser", res.data.refresh.token);

                req.headers = {
                    ...req.headers,
                    Authorization: `Bearer ${res.data.access.token}`,
                };
            })
            .catch((err) => console.log(err));
    }
    return req
}, function (error) {
    return Promise.reject(error)
})
