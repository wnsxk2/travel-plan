import { Router } from 'express';
import type { City, Country } from '../types';
import { citiesDB, countriesDB } from '../db';

const cityRouter = Router();

cityRouter.get('/', (req, res) => {
  citiesDB.find({}, (err: Error | null, cities: City[]) => {
    if (err) {
      res.status(500).send(err);
    } else {
      countriesDB.find({}, (err: Error | null, countries: Country[]) => {
        if (err) {
          return res.status(500).send(err);
        } else if (countries.length === 0) {
          return res.status(404).send('No countries found');
        } else {
          const newCities = cities.map((city) => {
            const country = countries.find(
              (country) => country.code === city.country
            );
            return {
              ...city,
              country,
            };
          });
          return res.send(newCities);
        }
      });
    }
  });
});

cityRouter.get('/search', (req, res) => {
  const { q } = req.query;

  if (typeof q !== 'string') {
    return res.status(400).send('Query parameter "q" must be a string');
  }

  const queryRegex = new RegExp(q, 'i');

  countriesDB.find({}, (err: Error | null, countries: Country[]) => {
    if (err) {
      return res.status(500).send(err);
    }

    const searchCountries = countries.filter((country) =>
      country.name.match(queryRegex)
    );

    const countriesRegex = new RegExp(
      searchCountries.map((country) => country.code).join('|'),
      'i'
    );

    const dbQuery =
      searchCountries.length > 0
        ? {
            $or: [{ name: new RegExp(q, 'i') }, { country: countriesRegex }],
          }
        : { name: new RegExp(q, 'i') };

    citiesDB.find(dbQuery, (err: Error | null, cities: City[]) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        const newCities = cities.map((city) => {
          const country = countries.find(
            (country) => country.code === city.country
          );
          return {
            ...city,
            country,
          };
        });
        return res.send(newCities);
      }
    });
  });
});

cityRouter.get('/:city', (req, res) => {
  citiesDB.findOne(
    { city: req.params.city },
    (err: Error | null, city: City) => {
      if (err) {
        res.status(500).send(err);
      } else {
        countriesDB.findOne(
          { code: city.country },
          (err: Error | null, country) => {
            if (err) {
              return res.status(500).send(err);
            } else if (!country) {
              return res.status(404).send('Country not found');
            } else {
              return res.send({
                ...city,
                country,
              });
            }
          }
        );
        res.send(city);
      }
    }
  );
});

cityRouter.post('/', (req, res) => {
  const city = req.body as City;
  citiesDB.insert(city, (err: Error | null, doc: City) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(doc);
    }
  });
});

export default cityRouter;
