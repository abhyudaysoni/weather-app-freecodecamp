import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = (props) => {
  const [search, setSearch] = useState(null);

  const searchHandler = (searchData) => {
    setSearch(searchData);
    props.onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <AsyncPaginate
        placeholder="search for a place"
        debounceTimeout={600}
        value={search}
        onChange={searchHandler}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
