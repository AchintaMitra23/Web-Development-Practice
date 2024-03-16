/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import EmployeeList from './components/EmployeeList';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import EmployeeDetails from './components/EmployeeDetails';

function App () {
  const [position, setPosition] = useState ('');
  const [employees, setEmployees] = useState ([]);
  const [employeeID, setEmployeeID] = useState ('');

  useEffect (
    () => {
      if (employees.length > 0) {
        setEmployeeID (employees[0]._id);
      }
    },
    [employees]
  );

  return (
    <div className="App">
      <Header />
      <Search
        setEmployees={setEmployees}
        position={position}
        setPosition={setPosition}
      />
      <Container>
        <InnerContainer>
          <EmployeeList
            employees={employees}
            setEmployeeID={setEmployeeID}
            setEmployees={setEmployees}
          />
        </InnerContainer>
        <InnerContainer>
          <EmployeeDetails
            employeeID={employeeID}
            setEmployees={setEmployees}
            position={position}
          />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
