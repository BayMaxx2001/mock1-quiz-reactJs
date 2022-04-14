export function setLocalStorageUser(data) {
    localStorage.setItem('accessTokenUser', data.tokens.access.token)
    localStorage.setItem('refreshTokenUser', data.tokens.refresh.token)
    localStorage.setItem('username', data.user.username)
    localStorage.setItem('expires', data.tokens.access.expires)
}
