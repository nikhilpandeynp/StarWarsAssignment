import axios from 'axios';
import useSearchPlanet from './useSearchPlanet';
import { renderHook, act } from '@testing-library/react-hooks'

jest.mock('axios');

describe('the useInput hook', () => {
    beforeAll(() => {
        const resp = { data: { results: ['xyz'] } };
        axios.get.mockResolvedValue(resp);
    });

    it('should make the api call to fetch the planets', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useSearchPlanet('Luke Skywalker')());
        act(() => {
            result.current.setInputText('a');
        });
        await waitForNextUpdate();
        expect(result.current.search.result).toEqual(['xyz']);
    });
});
