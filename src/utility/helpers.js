
export function setLocalStorageUser(data) {
    localStorage.setItem('accessTokenUser', data.tokens.access.token)
    localStorage.setItem('refreshTokenUser', data.tokens.refresh.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('expires', data.tokens.access.expires)
}


export function removeLocalStorageUser(data) {
    localStorage.removeItem('accessTokenUser')
    localStorage.removeItem('refreshTokenUser')
    localStorage.removeItem('user')
    localStorage.removeItem('expires')
}

export function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};