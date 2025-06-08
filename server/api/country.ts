import { Router } from 'express';
import type { Country } from '../types';
import { countriesDB } from '../db';

const countryRouter = Router();

countryRouter.get('/', (req, res) => {
  countriesDB.findOne({}, (err: Error | null, docs: Country[]) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(docs);
    }
  });
});

countryRouter.post('/', (req, res) => {
  const country = req.body as Country;
  countriesDB.insert(country, (err: Error | null, doc: Country) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(doc);
    }
  });
});

export default countryRouter;
