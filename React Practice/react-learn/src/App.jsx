/* eslint-disable no-unused-vars */
import './App.css';
import Problem1 from './prob_component/Problem1';
import Problem2 from './prob_component/Problem2';

{
  /* As Prop anything can pass of any data types including arrays and objects and arrays of object as well using {} symbol i.e. <name>={<var_name>}*/
  // const seatNumber = [1, 3, 4, 5, 6];
  /* <Prop name="Achinta" message="HI" age={25} seatNumber={seatNumber} />; */
}

function App () {
  return (
    <div className="App">
      <Problem2 />
    </div>
  );
}

export default App;
