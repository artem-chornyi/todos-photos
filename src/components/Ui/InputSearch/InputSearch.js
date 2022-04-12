import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const InputSearch = ({ value, onChange, onKeyDown, ...props }) => {
    const classes = useStyles();

    return (
        <div className={ classes.search }>
            <TextField
                onChange={ onChange }
                value={ value }
                onKeyDown={ onKeyDown }
                variant='outlined'
                className={ classes.input }
                { ...props }
            />
        </div>
    )
};

export default InputSearch;