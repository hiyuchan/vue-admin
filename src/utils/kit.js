
const token = 'TOKEN';
const username = 'USERNAME'

export function setToken(value){
    return localStorage.setItem(token,value);
}

export function getToken(){
    return localStorage.getItem(token);
}

export function removeToken(){
    return localStorage.removeItem(token);
}

export function setUsername(value){
    return localStorage.setItem(username,value)
}

export function getUsername(){
    return localStorage.getItem(username)
}

export function removeUsername(){
    return localStorage.removeItem(username);
}