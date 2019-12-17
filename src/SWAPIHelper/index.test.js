import axios from 'axios';
import { getPlanets, checkForValidUser } from './';

jest.mock('axios');

test('should return planets', () => {
    const resp = { data: { results: ['xyz'] } };
    axios.get.mockResolvedValue(resp);
    return getPlanets('').then(data => expect(data).toEqual(['xyz']));
});

test('should return true if user is valid', () => {
    const resp = { data: { results: [{ name: 'Luke Skywalker', birth_year: '19BBY' }] } };
    axios.get.mockResolvedValue(resp);
    return checkForValidUser('Luke Skywalker', '19BBY').then(x => expect(x).toEqual(true));
});

test('should return false if user is not valid', () => {
    const resp = { data: { results: [{ name: 'Luke Skywalker', birth_year: '19BBZ' }] } };
    axios.get.mockResolvedValue(resp);
    return checkForValidUser('Luke Skywalker', '19BBY').then(x => expect(x).toEqual(false));
});