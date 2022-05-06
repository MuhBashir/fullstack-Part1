import React from 'react';

const Filter = ({ handleSubmitSearch, search }) => {
  return (
    <>
      filter shown with:
      <input onChange={handleSubmitSearch} value={search} />
    </>
  );
};

export default Filter;
