import { compose } from 'recompose';
import reduxEnhancer from './reduxEnhancer';

const enhancers = compose(
    reduxEnhancer,
);

export default enhancers;