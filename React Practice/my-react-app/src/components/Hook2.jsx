/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

let Hook2 = () => {
  const [name, setName] = useState ('Hello');
  const [quantity, setQuantity] = useState (0);
  const [payment, setPayment] = useState ('visa');
  const [shipping, setShipping] = useState ('Drop Off');

  let changeName = e => {
    setName (e.target.value);
  };

  let changeQuantity = e => {
    setQuantity (e.target.value);
  };

  let changePayment = e => {
    setPayment (e.target.value);
  };

  let changeShipping = e => {
    setShipping (e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => changeName (e)} />
      <p>Name : {name}</p>

      <input
        type="number"
        value={quantity}
        onChange={e => changeQuantity (e)}
      />
      <p>Quantity : {quantity}</p>

      <select name="" id="" value={payment} onChange={e => changePayment (e)}>
        <option value="">Select an Option</option>
        <option value="visa">Visa</option>
        <option value="rupay">Rupay</option>
      </select>
      <p>Payment Mode : {payment}</p>

      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === 'Pick Up'}
          onChange={e => changeShipping (e)}
        />
        Pickup
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="Drop Off"
          checked={shipping === 'Drop Off'}
          onChange={e => changeShipping (e)}
        />
        Dropoff
      </label>
      <p>Shipping : {shipping}</p>
    </div>
  );
};

export default Hook2;
