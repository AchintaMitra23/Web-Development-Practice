import { Name } from "./Person.type";

interface PersonListProps {
  personList: Name[];
}

const PersonList = (props: PersonListProps) => {
  return (
    <div className="PersonList">
      {props.personList.map((person, index) => {
        return (
          <h2 key={index}>
            {person.firstName} {person.lastName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
