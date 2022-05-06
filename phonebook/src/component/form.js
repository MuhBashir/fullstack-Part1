import React from 'react';

const PersonForm = ({
  handleSubmit,
  handleChange,
  handleChangeNumber,
  newName,
  number,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} name={newName} />
          number:{' '}
        </div>
        <div>
          <input
            type='number'
            onChange={handleChangeNumber}
            value={number}
            name={number}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
