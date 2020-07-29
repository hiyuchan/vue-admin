
export function validatePhone(value){
    let regexPhone = /^1([38][0-9]|4[5-9]|5[0-3,5-9]|66|7[0-8]|9[89])[0-9]{8}$/
    return regexPhone.test(value)
}
export function validatePassword(value){
    let regexPass = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{7,17}$/
    return regexPass.test(value)
}