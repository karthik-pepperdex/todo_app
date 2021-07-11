import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core';
import './Todo.css';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline ⏰: Tomorrow Evening 7:00 PM" />
            </ListItem>
            {/* <li>{props.text}</li> */}
        </List>
    )
}

export default Todo;
