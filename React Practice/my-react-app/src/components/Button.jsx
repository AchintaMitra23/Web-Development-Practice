/* eslint-disable react/jsx-no-undef */
let Button = () => {
  let giveAlert = () => {
    alert ('Clicked Me');
  };
  let giveAlert2 = (e, name) => {
    console.log (e);
    alert (name);
    e.target.textContent = 'Achinta';
  };
  return (
    <div>
      <button className="btn" onClick={giveAlert}>
        Click Me
      </button>
      <button className="btn" onClick={e => giveAlert2 (e, 'Achinta')}>
        Click Me Param
      </button>
    </div>
  );
};

export default Button;
