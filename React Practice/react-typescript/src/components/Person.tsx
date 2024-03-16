import { PersonProps } from "./Person.type";

const Person = (props: PersonProps) => {
  return (
    <div className="Person">
      <h2>
        {props.person.firstName} {props.person.lastName}
      </h2>
    </div>
  );
};

export default Person;
