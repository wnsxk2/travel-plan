import DataStore from 'nedb';

export const countriesDB = new DataStore({
  filename: 'data/contries.db',
  autoload: true,
});

export const citiesDB = new DataStore({
  filename: 'data/cities.db',
  autoload: true,
});
