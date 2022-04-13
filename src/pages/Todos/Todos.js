import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, TodoList } from '../../components/Ui';
import CustomModal from '../../components/Ui/CustomModal';
import { addTodo, removeTodo, chengeTodo } from '../../redux/todo/todoActions';
import styles from './styles';

const useStyles = makeStyles(styles);

const Todos = () => {
    const classes = useStyles();
    const todos = useSelector( state => state.todo.todos );
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [statusTodo, setStatusTodo] = useState('plan');
    const [text, setText] = useState('');
    const [todoChenge, setTodoChenge] = useState({});

    useEffect(() => {
        if (todoChenge.text) {
            setOpen(true);
        }
    }, [todoChenge]);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setTodoChenge({});
        setText('');
        setOpen(false);
    };

    const deleteTodo = todo => {
        dispatch(removeTodo(todo));
    };

    const makeNewTodo = event => {
        event.preventDefault();

        handleClose();

        dispatch(addTodo({
            text,
            status: statusTodo,
            id: Date.now()
        }))
        

        setText('');
        setStatusTodo('plan');
    };

    const changeExistingTodo = () => {

        dispatch(chengeTodo(todoChenge));

        setTodoChenge({});
        handleClose();
    };

    const changeStatusTudo = (todo) => {
        dispatch(chengeTodo({
            ...todo,
            status: todo.status === 'plan' ? 'done' : 'plan'
        }));
    }

    return (
        <div className={ classes.content } >
            <div className={ classes.button }>
                <CustomButton
                    value='Add new todo'
                    onClick={ handleOpen }
                />
            </div>
            <TodoList
                todos={ todos }
                deleteTodo={ deleteTodo }
                setTodoChenge={ setTodoChenge }
                changeStatusTudo={ changeStatusTudo }
            />
            <CustomModal
                hideBackdrop
                open={ open }
                handleClose={ handleClose }
                statusTodo={ statusTodo }
                setStatusTodo={ setStatusTodo }
                text={ text }
                setText={ setText }
                makeNewTodo={ makeNewTodo }
                setTodoChenge={ setTodoChenge }
                todoChenge={ todoChenge }
                changeExistingTodo={ changeExistingTodo }
            />
        </div>
    )
};

export default Todos;