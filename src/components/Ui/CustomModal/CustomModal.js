import React, { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from "./styles";
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { values } from "../../../theme/values";
import { CustomButton } from "..";




const CustomModal = (props) => {
    const [disabled, setDisabled] = useState(true);
    const {
        open,
        handleClose,
        statusTodo,
        setStatusTodo,
        text,
        setText,
        makeNewTodo,
        setTodoChenge,
        todoChenge,
        changeExistingTodo
    } = props;

    useEffect(() => {
        if (text || todoChenge.text) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [text, todoChenge])


    const handleChange = ({ target }) => {
        if (!todoChenge.text) {
            setStatusTodo(target.value);
        } else {
            setTodoChenge({
                ...todoChenge,
                [target.name]: target.value
            })
        }
        
    };

    const onChangeText = ({ target }) => {
        if (!todoChenge.text) {
        setText(target.value);
        } else {
            setTodoChenge({
                ...todoChenge,
                [target.name]: target.value
            })
        }
    }



    return (
        <Modal
            open={ open }
            onClose={ handleClose }
        >
            <Box sx={ styles.box }>
                <h2>
                    Create todo
                </h2>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Status
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="status"
                        value={ todoChenge.text ? todoChenge.status : statusTodo }
                        onChange={ handleChange }
                    >
                        <FormControlLabel value="plan" control={<Radio />} label="Plan" />
                        <FormControlLabel value="done" control={<Radio />} label="Done" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    label={ values.TEXT_FIELD_LABAL }
                    multiline
                    rows={ values.TEXT_FIELD_ROWS }
                    name='text'
                    onChange={ onChangeText }
                    placeholder='Write a task'
                    value= { todoChenge.text ? todoChenge.text : text }
                />
                <CustomButton
                    value={ todoChenge.text ? 'Chage todo' :'Add new todo'}
                    onClick={ todoChenge.text ? changeExistingTodo : makeNewTodo }
                    disabled={ disabled }
                />
            </Box>
        </Modal>
    )
}

export default CustomModal;