import axios from 'axios';
const R = require('ramda');

const getAbsoluteURL = relativeURL => `https://swapi.co/api/${relativeURL}`;

export const checkForValidUser = (userName, password) => (
    axios.get(getAbsoluteURL(`people?search=${userName}`)).then(R.compose(
        ({ name, birth_year }) => userName === name && password === birth_year,
        R.pathOr({}, ['data', 'results', 0]),
    ))
);

export const getPlanets = searchText => (
    axios.get(getAbsoluteURL(`planets?search=${searchText}`)).then(R.pathOr([], ['data', 'results']))
);