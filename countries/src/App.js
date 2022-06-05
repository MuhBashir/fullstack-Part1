import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // set the states which are search and filter
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState("");
  const [showData, setShowData] = useState("");

  // get the data from server using useEffect hook
  useEffect(() => {
    axios.get("http://localhost:3001/countries").then((response) => {
      setSearch(response.data);
    });
  }, []);

  const filterFunc = search
    .filter((countries) => {
      return countries.name.common.toLowerCase().includes(filter.toLowerCase());
    })
    .map((countries) => {
      const countrySelected = { ...countries, id: uuidv4() };
      return countrySelected;
    });

  const showItem = (id) => {
    const itemSingle = filterFunc
      .filter((item) => item.id === id)
      .map((item) => {
        return <div key={item.id}>{item.name.common}</div>;
      });
    setShowData(itemSingle);
  };

  return (
    <>
      <input
        type='text'
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <div>
        {filter && filterFunc.length > 10
          ? "too much matches, specify another filter"
          : filterFunc.length > 1 && filterFunc.length <= 10
          ? filterFunc.map((country) => {
              return (
                <div key={country.id}>
                  <span>{country.name.common}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      showItem(country.id);
                    }}
                  >
                    show
                  </button>
                  <div>{showData}</div>
                </div>
              );
            })
          : filterFunc.length === 1
          ? filterFunc.map((country) => {
              return (
                <div key={country.id}>
                  <h1>{country.name.common}</h1>
                  <p>Capital {country.capital}</p>
                  <p>Area {country.area}</p>
                  <ul>
                    {Object.values(country.languages).map((lag) => {
                      const langObj = { lag: lag, id: uuidv4() };
                      return <li key={langObj.id}>{langObj.lag}</li>;
                    })}
                  </ul>
                  <div>{country.flag}</div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default App;
