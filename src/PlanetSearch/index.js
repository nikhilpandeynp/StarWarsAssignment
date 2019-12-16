import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import enhancers from './enhancers';
import useSearchPlanet from './useSearchPlanet';
const R = require('ramda');

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export const PlanetSearch = ({ name }) => {
    const classes = useStyles();
    const { inputText, setInputText, search } = useSearchPlanet(name)();
    const { loading, result = [] } = search;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="search"
                    label="Search"
                    name="search"
                    autoComplete="search"
                    autoFocus
                    value={inputText}
                    onChange={R.compose(
                        setInputText,
                        R.pathOr('', ['target', 'value'])
                    )}
                />
                {
                    loading ?
                        <CircularProgress /> :
                        <List>
                            {
                                result.map(({ name, population }, index) => (
                                    <ListItem key={index + 1}>
                                        <ListItemText 
                                            primary={<span style={{ 
                                                fontSize: population === 'unknown' ? "10px" : (population.toString().length * 2).toString() + "px"
                                            }}>{name}</span>}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                }
            </div>
        </Container>
    );
}

PlanetSearch.propTypes = {
    searchText: PropTypes.string,
    onChange: PropTypes.func,
    planets: PropTypes.array,
    loading: PropTypes.bool
};

export default enhancers(PlanetSearch);