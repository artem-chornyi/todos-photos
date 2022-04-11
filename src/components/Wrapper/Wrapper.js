import React from "react";
import { makeStyles } from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Wrapper = ({children}) => {
    const classes = useStyles();

    return (
        <div className={ classes.wrapper }>
            <div className={ classes.content }>
                { children }
            </div>
        </div>
    )
};

export default Wrapper;