import {useContext} from 'react';
import {UserContext} from './Component1';

let Component4 = () => {
  const user = useContext (UserContext);

  return (
    <div className="box">
      <h1>Component4</h1>
      <h6>{`Hello ${user}`}</h6>
    </div>
  );
};

export default Component4;
