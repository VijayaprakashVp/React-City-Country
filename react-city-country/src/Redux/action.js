// City name, Population and Country

export const ADD_CITY = "ADD_CITY";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const ADD_POPULATION = "ADD_POPULATION";

export const addCity = (payload) => ({
  type: ADD_CITY,
  payload,
});

export const addCountry = (payload) => ({
  type: ADD_COUNTRY,
  payload,
});

export const addPopulation = (payload) => ({
  type: ADD_POPULATION,
  payload,
});
