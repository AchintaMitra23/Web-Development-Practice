/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const person = {
    firstName: "Achinta",
    lastName: "Mitra",
  };

  const personList = [
    {
      firstName: "Nilanjana",
      lastName: "Basu",
    },
    {
      firstName: "Arun",
      lastName: "Mitra",
    },
    {
      firstName: "Basundhara",
      lastName: "Mitra",
    },
  ];

  const styleProp = {
    border: "1px solid black",
    padding: "1rem",
    color: "green",
  };

  return (
    <div className="App">
      {/* <Greet name="Achinta" messageCount={10} isLogin={false} />
      <Person person={person} />
      <PersonList personList={personList} /> */}

      {/* <Status status="loading" /> */}

      {/* <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Sachin</Heading>
      </Oscar> */}

      {/* <Button
        handleClick={(event, id) => console.log("Button Clicked...", event, id)}
      />
      <Input
        value=""
        placeholder="Please enter your name"
        handleChange={(event) => console.log(event.target.value)}
      /> */}

      {/* <Container styles={styleProp}/> */}
    </div>
  );
}

export default App;
