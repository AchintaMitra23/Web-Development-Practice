/* eslint-disable no-unused-vars */
import {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';

function App () {
  const [isLoginForm, setIsLoginForm] = useState (false);
  const [userID, setUserID] = useState(null);
  
  return (
    <div className="App">
      {userID
        ? <Task userID={userID} setUserID={setUserID} />
        : <Form
            isLoginForm={isLoginForm}
            setIsLoginForm={setIsLoginForm}
            userID={userID}
            setUserID={setUserID}
          />}
    </div>
  );
}

export default App;
