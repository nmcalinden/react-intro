import { post } from "../shared/api";

const localStorageKey = "__jarvis_token__";

function isLoggedIn() {
    // const token = getToken();
    // if (token && !isTokenExpired()) {
    //     return true;
    // }
    // return false;
}

async function getToken() {
    return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse({ user }) {
    window.localStorage.setItem(localStorageKey, user.token);
    return user;
}

function login({ username, password }) {
    return post("login", { username, password }).then(handleUserResponse);
}

function register({ username, password }) {
    return post("register", { username, password }).then(handleUserResponse);
}

async function logout() {
    window.localStorage.removeItem(localStorageKey);
}
export { getToken, login, register, logout, localStorageKey };
