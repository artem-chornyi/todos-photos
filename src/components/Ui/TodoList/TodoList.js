import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";




const TodoList = ({ todos, deleteTodo, setTodoChenge, changeStatusTudo }) => {
    const navigate = useNavigate();

    const todoAfteSort = todos.sort((a, b) => b.status.localeCompare(a.status))

    return (
        <div  >
            
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {todoAfteSort.map(todo => {
                    const {
                        id,
                        status,
                        text
                    } = todo;

                    const onClick = () => {
                        navigate(`/todos/${id}`)
                    }

                    return (
                        <ListItem
                            key={ id }
                            sx={{ paddingRight: '70px' }}
                            secondaryAction={
                            <>
                                <IconButton
                                    edge="end"
                                    aria-label="comments"
                                    onClick={ () => setTodoChenge(todo) }
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="comments"
                                    onClick={ () => deleteTodo(todo) }
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </>
                            }
                            disablePadding
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge='start'
                                    checked={ status === 'done' }
                                    onClick={ () => changeStatusTudo(todo) }
                                    tabIndex={-1}
                                    disableRipple
                                    sx={{ marginLeft: 0}}
                                    inputProps={{ 'aria-labelledby': id }}
                                />
                            </ListItemIcon>
                            
                            <ListItemButton
                                role={undefined}
                                sx={{ paddingRight: '15px !important' }}
                                onClick={ onClick }
                                dense
                            >
                                {status === 'done'
                                    ? (
                                        <s>
                                            <ListItemText id={ id } primary={ text } />
                                        </s>
                                    )
                                    : (
                                        <ListItemText id={ id } primary={ text } />
                                    )
                                }
                            </ListItemButton>
                            
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
};

export default TodoList;