import { useState } from 'react';
import Filter from './component/searchFilter';
import PersonForm from './component/form';
import Persons from './component/person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    // prevent default behaviour of inputs
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      setNewName('');
      setNumber('');
    } else {
      setPersons([
        ...persons,
        { id: new Date().getTime().toString(), name: newName, number },
      ]);
      setNewName('');
      setNumber('');
      setSearch('');
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  // handele search buttton
  const handleSubmitSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Filter search={search} handleSubmitSearch={handleSubmitSearch} />
      <h1>add a new</h1>
      <PersonForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newName}
        handleChangeNumber={handleChangeNumber}
        number={number}
      />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} />
    </>
  );
};

export default App;
