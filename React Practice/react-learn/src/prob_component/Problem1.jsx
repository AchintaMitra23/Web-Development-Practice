/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

const Problem1 = () => {
  const countries = [
    {name: 'India', value: 'IN', cities: ['Kolkata', 'Delhi']},
    {name: 'Pakistan', value: 'PK', cities: ['Lahore', 'Karachi']},
    {name: 'Bangladesh', value: 'BD', cities: ['Dhaka', 'Chittagong']},
  ];

  const [selectedCountry, setSelectedCountry] = useState ('IN');
  let cities = countries.filter (
    country => country.value === selectedCountry
  )[0].cities;

  let handleCountryChange = e => {
    setSelectedCountry (s => (s = e.target.value));
  };

  return (
    <div>
      <h5>Country - {selectedCountry}</h5>
      <select onChange={e => handleCountryChange (e)}>
        {countries.map ((country, index) => {
          return (
            <option key={index} value={country.value}>{country.name}</option>
          );
        })}
      </select>
      <h5>Cities</h5>
      <select>
        {cities.map ((city, index) => {
          return <option key={index} value={index}>{city}</option>;
        })}
      </select>
    </div>
  );
};

export default Problem1;
