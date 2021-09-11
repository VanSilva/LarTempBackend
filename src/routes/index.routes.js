import { Router } from 'express';

import animal from './animal.routes';
import animalCastration from './animalCastration.routes';
import animalHeight from './animalHeight.routes';
import animalType from './animalType.routes';
import animalVaccine from './animalVaccine.routes';
import city from './city.routes';
import lar from './lar.routes';
import person from './person.routes';
import personAuthentication from './personAuthentication.routes';
import post from './post.routes';
import reaction from './reaction.routes';

module.exports = server => {
  server.use((req, res, next) => {
    animal(server, new Router());
    animalCastration(server, new Router());
    animalHeight(server, new Router());
    animalType(server, new Router());
    animalVaccine(server, new Router());
    city(server, new Router());
    lar(server, new Router());
    reaction(server, new Router());
    person(server, new Router());
    personAuthentication(server, new Router());
    post(server, new Router());
    next();
  });
};
