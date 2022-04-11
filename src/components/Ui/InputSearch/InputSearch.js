import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const InputSearch = () => {
    const classes = useStyles();

    return (
        <div className={ classes.search }>
            <TextField/>
        </div>
    )
};

export default InputSearch;