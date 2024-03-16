/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import UseState1 from './useState/UseState1';
import UseState2 from './useState/UseState2';
import UseReducer1 from './useReducer/UseReducer1';
import UseEffect1 from './useEffect/UseEffect1';
import UseRef1 from './useRef/UseRef1';
import UseLayoutEffect1 from './useLayoutEffect/UseLayoutEffect1';
import UseImperativeHandle1 from './useImperativeHandle/UseImperativeHandle1';
import UseContext1 from './useContext/UseContext1';
import UseMemo1 from './useMemo/UseMemo1';
import UseCallback1 from './useCallback/UseCallback1';

const App = () => {
  return (
    <div className="App">
      <UseCallback1 />
    </div>
  );
};

export default App;
