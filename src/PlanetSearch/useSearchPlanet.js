import { useState } from 'react';
import { useAsync } from 'react-async-hook';
import useConstant from 'use-constant';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { getPlanets } from '../SWAPIHelper';

let previousMinuteTimestamp;
let previousCallCount = -1;

const getCallCount = () => {
    const minuteTimestamp = Math.floor(Math.floor(Date.now() / 1000)/60);
    if (!previousMinuteTimestamp || previousMinuteTimestamp !== minuteTimestamp) {
        previousMinuteTimestamp = minuteTimestamp;
        previousCallCount = -1;
    }
    previousCallCount += 1;
    return previousCallCount;
};

const checkForCallCount = callback => {
    let callCount = getCallCount();
    if (callCount > 15) {
        setTimeout(() => checkForCallCount(callback), 1000);
    } else {
        callback();
    }
}

const restrictCallsPerMinute = fn => x => new Promise(resolve => {
    checkForCallCount(() => {
        fn(x).then(x => resolve(x));
    });
});

export default name => {
    const useSearchPlanet = () => {
        const [inputText, setInputText] = useState('');
    
        const debouncedSearchStarwarsHero = useConstant(() =>
            AwesomeDebouncePromise(name === 'Luke Skywalker' ? getPlanets : restrictCallsPerMinute(getPlanets), 300)
        );
    
        const search = useAsync(
            async () => {
                return inputText.length === 0 ? [] : debouncedSearchStarwarsHero(inputText)
            },
            [inputText]
        );
    
        return {
            inputText,
            setInputText,
            search,
        };
    };

    return useSearchPlanet;
}