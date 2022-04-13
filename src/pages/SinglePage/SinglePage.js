import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { CustomButton } from '../../components/Ui';

const SinglePage = () => {
    const todos = useSelector( state => state.todo.todos );
    const navigate = useNavigate();
    const { id } = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        const curentTudo = todos.filter(todo => todo.id === +id);

        if (curentTudo.length === 0) {
            navigate(`/notfound`)
        } else {
            setTodo(curentTudo[0])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onClick = () => {
        navigate(-1)
    };

    return (
        <>
            <div>
                { todo.text }
            </div>
            <CustomButton
                value='Go back'
                onClick={ onClick }
            />
        </>
    )
}

export default SinglePage;

