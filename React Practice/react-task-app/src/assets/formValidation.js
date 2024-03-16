/* eslint-disable no-unused-vars */
const IS_NULL_OR_EMPTY = (userName, email, password, contact) => {
    return (userName == null || userName == '' || password == null || password == '' || email == null || email == '' || contact == null || contact == '');
}
const IS_NULL_OR_EMPTY_LOGIN = (email, password) => {
    return (password == null || password == '' || email == null || email == '');
}

const REG_VALIDATION = (userName, userNameRef, email, emailRef, password, passwordRef, contact, contactRef) => {
    userNameRef.current.style.borderColor = userName == null || userName == '' ?
        'red' :
        'rgba(255, 255, 255, 0.5)';
    emailRef.current.style.borderColor = email == null || email == '' ?
        'red' :
        'rgba(255, 255, 255, 0.5)';
    passwordRef.current.style.borderColor = password == null || password == '' ?
        'red' :
        'rgba(255, 255, 255, 0.5)';
    contactRef.current.style.borderColor = contact == null || contact == '' ?
        'red' :
        'rgba(255, 255, 255, 0.5)';
};

export { IS_NULL_OR_EMPTY, IS_NULL_OR_EMPTY_LOGIN, REG_VALIDATION }