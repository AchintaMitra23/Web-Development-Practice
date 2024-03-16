/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const Input = () => {
  const [form, setForm] = useState ({
    firtName: '',
    lastName: '',
    email: '',
    contact: '',
  });

  let handleFirstName = e => {
    setForm (f => ({...f, firtName: e.target.value})); // spread operator
  };
  let handleLastName = e => {
    setForm (f => ({...f, lastName: e.target.value}));
  };
  let handleEmailID = e => {
    setForm (f => ({...f, email: e.target.value}));
  };
  let handleContactNo = e => {
    setForm (f => ({...f, contact: e.target.value}));
  };

  let submit = e => {
    e.preventDefault ();
    console.log (form);
    setForm (f => ({firtName: '', lastName: '', email: '', contact: ''}));
  };

  return (
    <div>
      <h4>First Name : {form.firtName}</h4>
      <h4>Last Name : {form.lastName}</h4>
      <h4>Email ID : {form.email}</h4>
      <h4>Contact No : {form.contact}</h4>

      <form action="" method="post">
        <div style={{margin: '10px'}}>
          <label htmlFor="">First Name</label><br />
          <input
            type="text"
            name="fname"
            id="fname"
            value={form.firtName}
            onChange={e => handleFirstName (e)}
          />
        </div>
        <div style={{margin: '10px'}}>
          <label htmlFor="">Last Name</label> <br />
          <input
            type="text"
            name="lname"
            id="lname"
            value={form.lastName}
            onChange={e => handleLastName (e)}
          />
        </div>
        <div style={{margin: '10px'}}>
          <label htmlFor="">Email ID</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={e => handleEmailID (e)}
          />
        </div>
        <div style={{margin: '10px'}}>
          <label htmlFor="">Contact No</label><br />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={form.contact}
            onChange={e => handleContactNo (e)}
          />
        </div>
        <button type="submit" onClick={e => submit (e)}>Submit</button>
      </form>
    </div>
  );
};

export default Input;
