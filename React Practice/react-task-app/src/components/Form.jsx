/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import styles from '../styles/form.module.css';
import UserNameField from '../commons/UserNameField';
import EmailField from '../commons/EmailField';
import PasswordField from '../commons/PasswordField';
import ContactField from '../commons/ContactField';
import {REGISTER, LOGIN} from '../routes/App.routes';
import {
  IS_NULL_OR_EMPTY,
  IS_NULL_OR_EMPTY_LOGIN,
  REG_VALIDATION,
} from '../assets/formValidation';

const Form = ({isLoginForm, setIsLoginForm, userID, setUserID}) => {
  const [userName, setUserName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [contact, setContact] = useState ('');
  const [error, setError] = useState (null);

  const userNameRef = useRef ('');
  const emailRef = useRef ('');
  const passwordRef = useRef ('');
  const contactRef = useRef ('');

  let formText = isLoginForm ? 'Login' : 'Register';

  let register = async () => {
    REG_VALIDATION (
      userName,
      userNameRef,
      email,
      emailRef,
      password,
      passwordRef,
      contact,
      contactRef
    );
    if (IS_NULL_OR_EMPTY (userName, email, password, contact)) {
      setError ('Please provide all the fields mentioned...');
    } else {
      const body = {
        username: userName,
        email: email,
        password: password,
        contact: contact,
      };
      await fetch (REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (body),
      })
        .then (res => res.json ())
        .then (data => {
          if (data.message == 'SUCCESS') {
            setUserID (data.value._id);
            setError (null);
            setUserName ('');
            setEmail ('');
            setPassword ('');
            setContact ('');
          } else {
            setError (data.value);
          }
        })
        .catch (error => console.log (error));
    }
  };

  let login = async () => {
    if (IS_NULL_OR_EMPTY_LOGIN (email, password)) {
      setError ('Please provide all the fields mentioned...');
    } else {
      const params = `${email}/${password}`;
      await fetch (LOGIN + params)
        .then (res => res.json ())
        .then (data => {
          if (data.message == 'SUCCESS') {
            setUserID (data.value._id);
            setError (null);
            setEmail ('');
            setPassword ('');
          } else {
            setError (data.value);
          }
        })
        .catch (error => console.log (error));
    }
  };

  let submit = e => {
    e.preventDefault ();
    return isLoginForm ? login () : register ();
  };

  let handleFormChange = e => {
    setIsLoginForm (!isLoginForm);
    setError (null);
    setUserName ('');
    setEmail ('');
    setPassword ('');
    setContact ('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h3 className={styles.head}>{formText}</h3>
        <form action="" method="post" className={styles.form}>
          {!isLoginForm
            ? <div>
                <UserNameField
                  userName={userName}
                  setUserName={setUserName}
                  userNameRef={userNameRef}
                />
                <EmailField
                  email={email}
                  setEmail={setEmail}
                  emailRef={emailRef}
                />
                <PasswordField
                  password={password}
                  setPassword={setPassword}
                  passwordRef={passwordRef}
                />
                <ContactField
                  contact={contact}
                  setContact={setContact}
                  contactRef={contactRef}
                />
              </div>
            : <div>
                <EmailField
                  email={email}
                  setEmail={setEmail}
                  emaileRef={emailRef}
                />
                <PasswordField
                  password={password}
                  setPassword={setPassword}
                  passwordRef={passwordRef}
                />
              </div>}
          <div className={styles.section1}>
            <button className={styles.submit} onClick={e => submit (e)}>
              {formText}
            </button>
            <div className={styles.text}>
              {!isLoginForm
                ? <span onClick={e => handleFormChange (e)}>
                    Already have an account ? Login
                  </span>
                : <span onClick={e => handleFormChange (e)}>
                    New to this app ? Register
                  </span>}
            </div>
          </div>
          {error
            ? <div className={styles.section2}>
                <p className={styles.error}>{error}</p>
              </div>
            : ''}
        </form>
      </div>
    </div>
  );
};

export default Form;
