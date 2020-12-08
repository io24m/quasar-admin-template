const tokenName = 'Admin-Token'

export function getToken() {
    return localStorage.getItem(tokenName);
}
export function setToken(token) {
    localStorage.setItem(tokenName, token || "")
}