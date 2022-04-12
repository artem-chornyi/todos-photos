import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { InputSearch, CustomButton, PhotoCard } from '../../components/Ui';

import styles from './styles';
import { getById } from "../../api/api";
import { Preloader } from "../../components";
import { values } from "../../theme/values";
import { validation } from "../../utils";


const useStyles = makeStyles(styles);

const Photos = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [lastSearch, setLastSearch] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if ( loading ) {
            setData([]);

            getById(value)
            .then(res => {
                setData(res);
                setValue('');
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
        }
    },[loading]);

    useEffect(() => {
        if (value !== lastSearch && value) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [value]);



    const onChange = ({ target }) => {
        setError('')
        setValue(target.value);
    };

    const onClick = () => {
        const verified = validation(value, values.MAXIMUM_SEARCH_VALUE);

        if (verified) {
            setLastSearch(value);
            setLoading(true);
        } else {
            setError('Use only numbers from 1 to 100')
        }
    };

    const onKeyDown = ({ key }) => {
        if(key === 'Enter'){
            onClick();
        }
    };

    const PhotoContent = () => {
        return (
            data.map(item => (
                <PhotoCard
                    src={ item.thumbnailUrl }
                    title={ item.title }
                    key={ item.id }
                />
            ))
        )
    };


    return (
            <div className={ classes.allContent } >
                <div className={ classes.search } >
                    <InputSearch
                        onChange={ onChange }
                        value={ value }
                        onKeyDown={ onKeyDown }
                        label='Search by id'
                        helperText={ error }
                        error={ error }
                    />
                    <CustomButton
                        value='Get photos'
                        variant='contained'
                        onClick={ onClick }
                        disabled={ disabled }
                    />
                </div>

                { loading && <Preloader/> }

                <div className={ classes.photoContent } >
                    {data && PhotoContent()}
                </div>
            </div>
    )
};

export default Photos;