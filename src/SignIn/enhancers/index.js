import { compose } from 'recompose';
import localStateEnhancer from './localStateEnhancer';
import signInEnhancer from './signInEnhancer';
import reduxEnhancer from './reduxEnhancer';

const enhancers = compose(
    reduxEnhancer,
    signInEnhancer,
    localStateEnhancer
);

export default enhancers;