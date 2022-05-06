import React from 'react';

const Persons = ({ search, persons }) => {
  const nameCapitalized = (person) => {
    return person.name.charAt(0).toUpperCase() + person.name.slice(1);
  };
  return (
    <>
      {search !== ''
        ? persons
            .filter((person) => {
              let personSelected = '';
              if (search === '') {
                return person;
              } else if (
                person.name.toLowerCase().includes(search.toLowerCase())
              ) {
                personSelected = person;
                return person;
              }
              return personSelected;
            })
            .map((person) => {
              return <p key={person.id}>{nameCapitalized(person)}</p>;
            })
        : persons.map((person) => {
            return (
              <p key={person.id}>
                {nameCapitalized(person)} {person.number}
              </p>
            );
          })}
    </>
  );
};

export default Persons;
