import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { InputSearch } from '../../components/Ui';
import { Wrapper } from '../../components';
import styles from './styles';

const useStyles = makeStyles(styles);

const Photos = () => {
    const classes = useStyles();

    return (
        <Wrapper>
            <div>
                <Link to='/'>
                    Home
                </Link>
            </div>
            <InputSearch/>
        </Wrapper>
    )
};

export default Photos;